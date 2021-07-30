import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { useQuery } from '@apollo/client'
import { GET_JOBS } from './graphql/GET_JOBS'
import { searchObject, searchLocation, searchFullTime } from './utils/helpers'
import { trans } from './utils/darkMode'
import Header from './components/Header'
import JobsList from './components/JobsList';
import JobDetail from './components/JobDetails/JobDetail'
import './App.scss';

const App = () => {

  const [darkMode, setDarkMode] = useState(false)

  const [jobsList, setJobsList] = useState([])
  const [fetchOffset, setFetchOffset] = useState(0)

  const [filterTerms, setFilterTerms] = useState({})
  const [filteredList, setFilteredList] = useState([])

  const {loading, error, data, refetch } = useQuery(GET_JOBS, {variables: { offset: fetchOffset }})

  //SET JOBSLIST ON DATA FETCHS
  useEffect(() => {
    if (data) {
      const { job } = data
      if (jobsList.length !== 0) {
        const copy = [...jobsList]
        setJobsList([...copy, ...job])  
      } else {
        setJobsList(job)
      } 
    } 
  // eslint-disable-next-line
  }, [data])

  //SETUP ON INITIAL FETCH
  useEffect(() => {
    setFilteredList(jobsList)
  }, [jobsList])

  //SET FILTERED LIST ON FILTER TERM UPDATE
  useEffect(() => {
    const allJobs = [...jobsList]
    const firstFilter = allJobs.filter(job => searchObject(job, filterTerms.searchTerm))
    const secondFilter = firstFilter.filter(job => searchLocation(job, filterTerms.location) )
    const thirdFilter = secondFilter.filter(job => searchFullTime(job, filterTerms.fullTime))
    setFilteredList(thirdFilter)
  // eslint-disable-next-line
  }, [filterTerms])

  //PAGINATION
  const loadMoreJobsHandler = () => {
    setFetchOffset(fetchOffset + 6)
    refetch()
  }

  //SCROLL TO PAGE BOTTOM ON JOBSLIST UPDATE
  useEffect(() => {
    if (jobsList.length !== 6) {
      window.scrollTo(0, document.body.scrollHeight)
    }
  }, [jobsList])

  //MODE TOGGLE
  const toggleDarkMode = () => {
    if (darkMode === false) {
      trans();
      setDarkMode(true);
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      trans();
      setDarkMode(false);
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }

  return (
      <Router>
        <div className="App">
          <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
          <Switch>
            <Route exact path="/"
              render={props => <JobsList {...props}
              jobsList={jobsList}
              setJobsList={setJobsList}
              filteredList={filteredList}
              setFilterTerms={setFilterTerms}
              loadMoreJobsHandler={loadMoreJobsHandler}
              loading={loading}
              error={error}
              />}></Route>
            <Route path="/job"
              render={props => <JobDetail {...props}
              />}></Route>  
            <Redirect to="/"/>
          </Switch>
        </div>
      </Router>
   
  );
}

export default App;

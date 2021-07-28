import { useState, useEffect } from 'react';
import { ApolloProvider } from '@apollo/client'
import { searchObject, searchLocation, searchFullTime } from './utils/helpers'
import { client } from './utils/graphql'
import JobsList from './components/JobsList';
import './App.scss';


function App() {

  const [jobsList, setJobsList] = useState([])
  const [fetchOffset, setFetchOffset] = useState(0)

  const [filterTerms, setFilterTerms] = useState({})
  const [filteredList, setFilteredList] = useState([])

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

  //SCROLL TO PAGE BOTTOM ON JOBSLIST UPDATE
  useEffect(() => {
    if (jobsList.length !== 6) {
      window.scrollTo(0, document.body.scrollHeight)
    }
  }, [jobsList])

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <JobsList
          jobsList={jobsList}
          setJobsList={setJobsList}
          fetchOffset={fetchOffset}
          setFetchOffset={setFetchOffset}
          filteredList={filteredList}
          setFilterTerms={setFilterTerms}
        />
      </div>
    </ApolloProvider> 
  );
}

export default App;

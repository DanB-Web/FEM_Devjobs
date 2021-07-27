import './App.scss';
import { ApolloProvider } from '@apollo/client'
import { client } from './utils/graphql'
import JobsList from './components/JobsList';

function App() {

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <JobsList/>
      </div>
    </ApolloProvider> 
  );
}

export default App;

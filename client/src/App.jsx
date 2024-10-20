

import dataFetch from './components/fetch.jsx'

const App = () => {
  const { loading, error, apiData:teams } = dataFetch('http://127.0.0.1:8000/api/teams')

  return ( 
    <main>
      <h1>Teams and Names</h1>
      { loading && <p>loading..</p> }

      { !loading && error ? <p>Error reading data </p> : 
        teams.map( (team)=>{
          <ul key={team.id}>
            <li>{team.name}</li>
          </ul>
        })
      }
    </main>
   );
}
 
export default App;
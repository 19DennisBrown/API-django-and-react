

import fetchData from './Hooks/fetching'

const Home = () => {

  const { loading, error, apiData:teams } = fetchData('http://127.0.0.1:8000/api/teams/')

  return ( 
    
    <main>
      <h1>Teams and Names</h1>
      { loading ? <p>loading..</p> : ''  }

      { !loading && error ? <p>Error reading data </p> : 
          teams.map((team)=>(
            <ul key={team.id}>
              <li>{team.name}</li>
            </ul>
          ))
        
      }
    </main>
   );
}
 
export default Home;
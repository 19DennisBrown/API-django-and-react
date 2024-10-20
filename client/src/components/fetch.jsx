import axios from "axios";
import { useEffect, useState } from "react";



const dataFetch = (url) => {
  const [loading, setLoading] = useState(false)
  const [apiData, setApiData] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchApi= async()=>{
      setLoading(true)
      try {
        const resp = await  axios.get(url)
        const info = await resp?.data
        setApiData(info)
        console.log(apiData)
      } catch (err) {
        setError(err)      
        setLoading(false)
      }
    }
    fetchApi()

  }, [url])

  
  return { loading, apiData, error}

}
 
export default dataFetch;
import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [loading, setLoading] = useState(false)
  const [apiData, setApiData] = useState([])
  const [error, setError] = useState(null)
  useEffect(() => {
    const fetchData =async()=>{
      setLoading(true)
      try {
        const response = await axios.get(url)
        const data = await response?.data
        setApiData(data)
        setLoading(false)
      } catch (err) {
        setError(err)        
        setLoading(false)
      }
    }

    fetchData()
  }, [url])
  
  return { loading, apiData, error }
}
 
export default useFetch;
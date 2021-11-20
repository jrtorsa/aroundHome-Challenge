 import { useEffect, useState } from "react"
import { getData } from "services/api"

 export const useData = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    getData().then( res => setData(res.data))
  }, [])  

  return {
    data
   }
 }
 
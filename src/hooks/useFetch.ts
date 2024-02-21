import {useState, useEffect} from 'react';

export default function useFetch<T>(url:string):[boolean,unknown,T|null]{
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState(null);
    const [data,setData]=useState(null);
    useEffect(() => {
        setLoading(true);
        setError(null);
        fetch(url).then((res)=>{
            return res.json();
        }).then((dataRecieved)=>{
            setData(dataRecieved);
        }).catch((err)=>{
            setError(err);
            console.log(err);
        }).finally(()=>{
            setLoading(false)
        });
    }, [])
    
  
    return [loading, error, data];
  }
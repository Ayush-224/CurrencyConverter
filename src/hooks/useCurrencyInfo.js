// import { useEffect,useState } from "react";

// function useCurrencyInfo(currency){
//     const [data,setData]=useState({})
//     useEffect(()=>{
//         fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/inr.json`)
//         .then((res)=>res.json())
//         .then((res)=>setData(res[currency]))
//         console.log(data);
//     },[currency])
//     console.log(data);
//     return data;
// }

// export default useCurrencyInfo;

import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`);
        const result = await response.json();
        setData(result[currency]);
      } catch (error) {
        console.error("Error fetching currency data:", error);
      }
    };

    fetchData();
  }, [currency]);

  return data;
}

export default useCurrencyInfo;

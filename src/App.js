import Crypto from "./components/Crypto"
import Context from "./components/context/createContext";
import { useEffect,useState } from "react";
import './style/style.css'

function App() {
  let [data,setData]=useState([]);
  let fetchData=async()=>{
    try{
      let response=await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd');
      if(! response.ok){
        throw Error("Data is not fetching");
      }
      let fetchdata=await response.json();
      setData(fetchdata)
        

    }catch(err){
      console.log(err);
    }
  }
  useEffect(()=>{
    fetchData();
  },[])
  console.log(data)

  return (
    <div>


   < Context.Provider value={data} >
      <Crypto/>
      
      </Context.Provider>

    </div>
  );
}

export default App;

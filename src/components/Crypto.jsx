import {React,useContext,useState} from 'react'
import Context from  './context/createContext'
import '../style/style.css'
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';





export default function Dayone() { 
  const[toggle,setTuggle]=useState(false);
  const onChangeHandler=(event)=>{
    setTuggle(current => !current);
  }
  const[input,setInput]=useState('');
   
    const getdata=useContext(Context)

    const inputHandler=(event)=>{
       
       // console.log(event.target.value)
        setInput(event.target.value)
    }
  const serchItem=getdata.filter((item)=>{
    if(input == ''){
        return item;
    }else if(item.name.toLowerCase().includes(input.toLocaleLowerCase())){
        return item
    }
  })

  return (
    <>
    <nav class="navbar navbar-light bgcolor navbar-expand-lg fixed-top">
    <div className="navbar-brand text-white">$ Crypto Tracer</div>
   <div className="ml-auto">
    <form class="form-inline ">
        <input class="form-control mr-sm-2 " type="search" placeholder="Search" 
        aria-label="Search" onChange={inputHandler} />
        
    </form>

   </div>    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation" 
       onClick={onChangeHandler}
       ><span class="navbar-toggler-icon"></span></button>
    </nav>

    <div className="container-fluid ">
    { toggle &&
      <div className="row">
        <div className="col-lg-2  w-50 cols mt-5 bg-info ">
          <div className="row d-block ">
              <div className="container smallScreen ">
            <div className="col text-center p-1 ">
              <button className='btn bg-light  w-100 '  >Account</button>
            </div>
            <div className="col text-center p-1 ">
              <button className='btn bg-light  w-100 '  >Dash Board</button>
            </div>
            <div className="col text-center p-1 ">
              <button className='btn bg-light  w-100 '  >My portfolio</button>
            </div>
            <div className="col text-center p-5 ">
              <button className='btn bg-light  w-100 '  >Logout</button>
            </div>
            </div>
          </div>
        </div>
      </div> 
      }
      <div className="row p-5 mt-5">
        <div className="col-2 ">
          <div className="row d-block ">
          <div className="container bigScreen ">
            <div className="col text-center p-1 bg-light">
              <button className='btn bg-light  w-100 '  >Dash Board</button>
            </div>
            <div className="col text-center p-1 bg-light">
              <button className='btn bg-light  w-100 '  >My portfolio</button>
            </div>
            <div className="col text-center p-5 bg-light w-100">
              <button className='btn bg-light  w-100 '  >Logout</button>
            </div>
          </div></div></div>
        <div className="col-lg-10 ">
        <div className="container-fluid w-100  containers" >
     <div className="row ">
      {
      serchItem.map((crypto)=>{
        return(
          <>
        
          <div className="col-lg-3 mb-2 start-left">
            <div className="card w-100 rounded ">
              <div className="card-head d-flex p-3 ">
                <img src={crypto.image} className='w-25 h-25' alt="image" />
                <h4 className='ml-3'>{crypto.symbol}</h4>
              </div>
            <div className="card-body ">
                <h5 className="card-title">{crypto.name}</h5>
               { 
               crypto.price_change_24h > 0 ? 
            <p className="card-text">Price &nbsp;<b className='text-success'> ${crypto.current_price}</b></p>
        :<p className="card-text">Price <b className='text-danger'>${crypto.current_price}</b></p>
              }
        <p><b>Mrkt Capita</b>   {crypto.market_cap}</p>
               <div className="row">
                <div className="col-6 w-75">
                <button className='btn bg-successs w-100'>Buy</button>
                </div>
                <div className="col-6 w-75">
                <button className='btn bg-danger w-100'>Buy</button>
                </div>
               </div>
            </div>
          </div>
        </div>
       
          </>
        )
      })
     }
             
      </div> 
        </div>
        
      </div>
      </div> 
    </div>
    </>
  );
}

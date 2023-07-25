import {useContext,useState} from 'react'
import Context from './context/createContext'
import '../style/style.css'
function Portfolio() {
let data=useContext(Context);


  return (
    <div>
    <div className="conrainer-fluid mt-5">
      {
        data.map((ele)=>{
          return(
            <>
            <div className="container  mb-3">
              <div className="row">
                <div className="col d-flex justify-content-around">
                  <img src={ele.image} alt={ele.name} width={30} height={30} />
                  <p className='mt-1 ml-3'>{ele.name}</p>
                  <p className='mt-1'>({ele.symbol})</p>
               { ele.price_change_14h>0  ?<p className='mt-1 text-success'>{ele.current_price}</p> :
                                          <p className='mt-1 text-danger'>{ele.current_price}</p>
              
              }
                  <p className='bigscreen mt-1'>{ele.market_cap}</p>
                </div>
              </div>
             
            </div>
            
            </>
          )
        })
      }
    </div>
    </div>
  )
}

export default Portfolio
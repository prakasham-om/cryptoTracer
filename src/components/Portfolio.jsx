import {useContext,useState} from 'react'
import '../style/style.css'
import Context from './context/createContext'
function Portfolio() {
let data=useContext(Context);

  return (
    <div>
       <div className="container-fluid mt-5">
       <div className="card bg-dark text-white w-50 mt-5">
            <div className="card-header">
                <h2 text-white>Portfolio</h2>
            </div>
            <div className="card-body">
                <h3>$Amount</h3>
            </div>
         </div>
       </div>
    
    </div>
  )
}

export default Portfolio
import React from 'react'

const BuySell = () => {
  return (
    <div>
        <div className="container bg-info bordered mt-5">
            <label htmlFor="qty">Quantity</label>
            <input type="number" placeholder="Enter Quantity"  required/>

            <label htmlFor="price">Price</label>
            <input type="number" name="" id="" value={98765} />

            <br />

            <button className='btn bg-warning'>Confirm</button>

        </div>
    </div>
  )
}

export default BuySell
import React from 'react'
import Cards from './Cards'

function Cardcontainer() {
  return (
   <>
   <div className='card-container'>
     <h1 className='heading'>Popular food</h1>
     <div className='mycards'> 
     <Cards/>
<Cards/>
     </div>
   </div>
   </>
  )
}

export default Cardcontainer
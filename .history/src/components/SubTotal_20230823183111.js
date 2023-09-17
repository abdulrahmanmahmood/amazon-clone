import React from 'react'
import { useAuth } from './context/GlobalState'

const SubTotal = () => {
  const {basket}=useAuth();
  return (
    
    <div className='subtotal'>
      Subtotal({basket.length})
    </div>
  )
}

export default SubTotal
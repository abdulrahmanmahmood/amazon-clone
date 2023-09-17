import React from 'react'
import { useAuth } from './context/GlobalState'

const SubTotal = () => {
  const {basket}=useAuth();
  return (
    
    <div className='subtotal'>
      Subtotal({})
    </div>
  )
}

export default SubTotal
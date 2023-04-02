import React from 'react'
import book from './Book.gif'

export default function Spinner() {
  
    return (
      <div className='text-center'>
        <img className='my-3' src={book} alt="loading..." />
      </div>
    )
 
}

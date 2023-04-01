import React, { Component } from 'react'
import book from './Book.gif'

export class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img className='my-3' src={book} alt="loading..." />
      </div>
    )
  }
}

export default Spinner

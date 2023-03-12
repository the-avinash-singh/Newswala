import React, { Component } from 'react'
import book from './Book.gif'

export class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={book} alt="loading..." />
      </div>
    )
  }
}

export default Spinner

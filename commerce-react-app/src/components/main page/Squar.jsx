import React from 'react'

function Squar(props) {
  return (
    <div className='squar'>
        <p><span>{props.letter}</span></p>
        <span>{props.title}</span>
    </div>
  )
}

export default Squar
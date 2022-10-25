import React from 'react'
import { NavLink } from 'react-router-dom'

function Squar(props) {
  return (
    <div className='squar'>
      <NavLink to={props.link}>
      <p><span>{props.letter}</span></p>
        <span>{props.title}</span>
      </NavLink>
    </div>
  )
}

export default Squar
import React from 'react'
import { NavLink } from 'react-router-dom'

function Link(props) {
  if(props.class){
    <NavLink className={props.class} to={props.link}><span>{props.name}</span></NavLink>
  }
  return (
    <NavLink to={props.name}><span>{props.name}</span></NavLink>
  )
}

export default Link
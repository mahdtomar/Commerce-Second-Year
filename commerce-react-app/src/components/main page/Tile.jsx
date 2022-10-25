import React from 'react'
import Link from './Link'

function Tile(props) {
  return (
    <>
    <Link className='tile' name={props.name} />
    </>
  )
}

export default Tile
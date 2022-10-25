import React from 'react'
import Chapters from './Chapters'
function AccountingSubject(props) {
  return (
    
    <div className="subject">
        <h1>{props.name}</h1>
        <span>{props.word}</span>
        <div className="list">
            <Chapters list={props.list}/>
        </div>
    </div>
  )
}

export default AccountingSubject
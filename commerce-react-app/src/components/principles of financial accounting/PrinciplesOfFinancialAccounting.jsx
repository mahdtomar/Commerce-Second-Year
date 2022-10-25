import React from 'react'
import AccountingSubject from '../muliUsePages/AccountingSubject'
import '../../styles/subject.css'

function PrinciplesOfManagementalAccounting(props) {
  return (
    <div className='accounting'>
    <AccountingSubject  name='مبادئ المحاسبة' word='مادة في كلية تجارة' list={props.list} />
    </div>
  )
}

export default PrinciplesOfManagementalAccounting
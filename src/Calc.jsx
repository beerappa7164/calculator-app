import React, { useState } from 'react'

export default function () {
    const[value,setValue]=useState('')
  return (
    <div>
    <div className='Calculator'>
        <div className='display'>
            <input  type='text'  id='data' value={value}/>
        </div>
        <div className='Btn'>
            <div className='btn-data'>
            <button onClick={e=>{setValue('')}}>Ac</button>
            <button onClick={(e)=>{setValue(value.slice(0,-1))}}>DE</button>
           <button value='.' onClick={(e)=>{setValue(value+e.target.value)}}>.</button>
           <button value='/' onClick={(e)=>{setValue(value+e.target.value)}}>/</button>
           </div>

           <div className='btn-data'>
            <button value='7' onClick={(e)=>{setValue(value+e.target.value)}}>7</button>
            <button value='8'onClick={(e)=>{setValue(value+e.target.value)}}>8</button>
           <button value='9'onClick={(e)=>{setValue(value+e.target.value)}}>9</button>
           <button value='*'onClick={(e)=>{setValue(value+e.target.value)}}>*</button>
           </div>
           <div className='btn-data'>
            <button value='4' onClick={(e)=>{setValue(value+e.target.value)}} >4</button>
            <button value='5' onClick={(e)=>{setValue(value+e.target.value)}}>5</button>
           <button value='6' onClick={(e)=>{setValue(value+e.target.value)}}>6</button>
           <button value='+' onClick={(e)=>{setValue(value+e.target.value)}}>+</button>
           </div>
           <div className='btn-data'>
            <button value='1' onClick={(e)=>{setValue(value+e.target.value)}}>1</button>
            <button value='2'onClick={(e)=>{setValue(value+e.target.value)}}>2</button>
           <button value='3' onClick={(e)=>{setValue(value+e.target.value)}}>3</button>
           <button value='-' onClick={(e)=>{setValue(value+e.target.value)}}>-</button>
           </div>
           <div className='btn-data'>
            <button value='00' onClick={(e)=>{setValue(value+e.target.value)}}>00</button>
            <button value='0' onClick={(e)=>{setValue(value+e.target.value)}}>0</button>
           <button id='equal' value='=' onClick={e=>{setValue(eval(value))}}>=</button>
           
           </div>


        </div>
    </div>
    </div>
  )
}

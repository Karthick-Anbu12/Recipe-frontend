import React, { useContext } from 'react'
import context from './Context'
import { useParams } from 'react-router-dom'

function View() {
  const{list}=useContext(context)
  const {id}=useParams()
  return (
    <div className='container'>
      <h2 className='mb-2'>{list[id].title}</h2>
      <p className='mb-3'>Time: {list[id].time} Hour</p>
      <p className='mb-4'><h6>Ingredients:</h6> {list[id].ingredients}</p>
      <p className='mb-2'><h6>Instruction:</h6> {list[id].instruction}</p>
    </div>
  )
}

export default View

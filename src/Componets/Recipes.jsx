import React from 'react'
import Recipecard from './Recipecard'

function Recipes() {
  return (
    <div className='container d-flex justify-content-around flex-wrap mt-3 '>
      <Recipecard></Recipecard>
      <Recipecard></Recipecard>
      <Recipecard></Recipecard>
      <Recipecard></Recipecard>
      <Recipecard></Recipecard>
      <Recipecard></Recipecard>

    </div>
  )
}

export default Recipes

import React, { useContext } from 'react'
import Recipecard from './Recipecard'
import context from './Context'

function Recipes() {
  const {list,isLoggedIn}=useContext(context)

  return (
    <div className='container d-flex justify-content-around flex-wrap mt-3 '>
      {
        !isLoggedIn&&<h2 >Please register your account to add recipe</h2>
      }
      {
        
        isLoggedIn&&list.map((data,index)=>{
         return <Recipecard data={data} index={index}></Recipecard>
        })

      }
    </div>
  )
}

export default Recipes

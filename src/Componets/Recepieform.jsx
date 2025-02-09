import React from 'react'

function Recepieform() {
  return (
    <div className='container w-50' >
      <h3>Create Recipe</h3>
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Title</label>
          <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Ingredients</label>
          <textarea type="textarea" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" rows="2"/>
        </div>

        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Instructions</label>
          <textarea type="textarea" class="form-control" id="exampleInputPassword1" rows="4" />
        </div>
        <button type="submit" class="btn btn-primary">Create Recipe</button>
      </form>
    </div>
  )
}

export default Recepieform

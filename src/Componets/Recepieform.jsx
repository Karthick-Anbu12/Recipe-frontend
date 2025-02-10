import axios from 'axios'
import { useFormik } from 'formik'
import React, { useContext } from 'react'
import context from './Context'
import { useNavigate } from 'react-router-dom'

function Recepieform() {
  const { getdata, isLoggedIn } = useContext(context)
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      title: "",
      ingredients: "",
      instruction: "",
      time: ""
    },
    validate: (values) => {
      let error = {}
      if (values.title == "" || values.title.length <= 3) {
        error.title = "Please enter recipe name"
      }
      if (values.ingredients.length == 0) {
        error.ingredients = "Ingredients Please "
      }
      if (values.instruction.length == 0) {
        error.instruction = "Please enter instruction"
      }
      if (values.time.length == "") {
        error.time = "Please enter cooking timing"
      }
      return error
    },
    onSubmit: async (values) => {
      if (!isLoggedIn) {
        alert("Please login to add recipe to the site")
        navigate('/login')
      }
      await axios.post("https://recipe-backend-2t3o.onrender.com/addrecipe", values, { headers: { Authorization: window.localStorage.getItem("mytoken") } })
      getdata()
      navigate('/')
    }
  })

  return (

    <div className='container w-50' >
      <h3>Create Recipe</h3>
      <form onSubmit={formik.handleSubmit}>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Title</label>
          <input type="text" className={`form-control  ${formik.errors.title && 'is-invalid'}`} name="title" value={formik.values.title} onChange={formik.handleChange} />
          <span className='invalid-feedback'>{formik.errors.title}</span>
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Ingredients</label>
          <textarea className={`form-control  ${formik.errors.ingredients && 'is-invalid'}`} name="ingredients" rows="2" value={formik.values.ingredients} onChange={formik.handleChange} placeholder='2 cups dried chickpeas' />
          <span className='invalid-feedback'>{formik.errors.ingredients}</span>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Instructions</label>
          <textarea className={`form-control  ${formik.errors.instruction && 'is-invalid'}`} name="instruction" rows="4" value={formik.values.instruction} onChange={formik.handleChange} placeholder='Add ginger-garlic paste and green chili' />
          <span className='invalid-feedback'>{formik.errors.instruction}</span>
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Time</label>
          <input type="number" className={`form-control  ${formik.errors.time && 'is-invalid'}`} name="time" value={formik.values.time} onChange={formik.handleChange} placeholder='In hour' />
          <span className='invalid-feedback'>{formik.errors.time}</span>
        </div>
        <button type="submit" class="btn btn-primary">Save Recipe</button>
      </form>
    </div>

  )
}

export default Recepieform

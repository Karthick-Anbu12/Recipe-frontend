import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react'
import { useNavigate } from 'react-router-dom';

function Register() {
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validate: (values) => {
            let error = {};
            if (values.email == "" || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                error.email = "Please enter valid Email "
            }
            if (values.password == "" || values.password.length <= 3) {
                error.password = "Please enter password"
            }
            return error
        },
        onSubmit: async (values) => {
            try {
                const response = await axios.post("https://recipe-backend-2t3o.onrender.com/putdata", values)
                if (response.status == 200) {
                    window.localStorage.setItem("mytoken", response.data.message)
                    navigate('/')
                    setLoggedin(true)
                    getdata()
                }
            } catch (error) {
                console.log(error)
            }

        }
    })
    return (
        <div className='row mt-10 '>
            <h2 className='ms-5'>Signin Form</h2>
            <div className='d-flex align-items-center p-3 mb-5 '>
                <form className='container w-50  p-3 mb-5 shadow-lg p-3 mb-5 bg-body rounded ' onSubmit={formik.handleSubmit}>
                    <div class="form-group mt-10">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" className={`form-control  ${formik.errors.email && 'is-invalid'}`} name='email' aria-describedby="emailHelp" placeholder="Enter email" value={formik.values.email} onChange={formik.handleChange} />
                        <span className='invalid-feedback'>{formik.errors.email}</span>
                    </div>
                    <div class="form-group mb-2">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" className={`form-control  ${formik.errors.password && 'is-invalid'}`} name='password' placeholder="Password" value={formik.values.password} onChange={formik.handleChange} />
                        <span className='invalid-feedback'>{formik.errors.password}</span>
                    </div>
                    <div className='fluid d-flex align-items-center '>
                        <button type="submit" class="btn btn-primary ">Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register

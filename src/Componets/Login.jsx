import { useFormik } from 'formik'
import React, { useContext } from 'react'
import context from './Context';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
    const { getdata ,setLoggedin} = useContext(context)
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
                const response = await axios.post("https://recipe-backend-2t3o.onrender.com/login", values)
                if (response.status == 200) {
                    window.localStorage.setItem("mytoken", response.data.message)
                    navigate('/')
                    setLoggedin(true)
                    getdata()
                }
                
            } catch (error) {
                alert("Invalid Credentials")
            }

        }
    })
    return (
        <div>
            <h2 className='ms-5' >Login Form</h2>
            <div className='d-flex align-items-center'>

                <form className='container w-50 shadow-lg p-3 mb-5 bg-body rounded-2 ' onSubmit={formik.handleSubmit}>
                    <div class="form-group mt-10">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" className={`form-control  ${formik.errors.email && 'is-invalid'}`} name='email' placeholder="Enter email" onChange={formik.handleChange} value={formik.values.email} />
                        <span className='invalid-feedback'>{formik.errors.email}</span>
                    </div>
                    <div class="form-group mb-2">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" className={`form-control  ${formik.errors.password && 'is-invalid'}`} name='password' placeholder="Password" onChange={formik.handleChange} value={formik.values.password} />
                        <span className='invalid-feedback'>{formik.errors.password}</span>
                    </div>
                    <div className='fluid d-flex align-items-center '>
                        <button type="submit" class="btn btn-primary ">Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login

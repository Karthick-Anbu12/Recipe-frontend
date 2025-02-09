import React from 'react'

function Login() {
  return (
        <div className='d-flex align-items-center'>
            <form className='container w-25 shadow-lg p-3 mb-5 bg-body rounded-2 '>
                <div class="form-group mt-10">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <div class="form-group mb-2">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <div className='fluid d-flex align-items-center '>
                <button type="submit" class="btn btn-primary ">Submit</button>
                </div>
            </form>
        </div>
  )
}

export default Login

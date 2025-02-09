import React from 'react'

function Register() {
    return (
        <div className='row mt-10 '>
        <div className='d-flex align-items-center p-3 mb-5 '>
            <form className='container w-25  p-3 mb-5 shadow-lg p-3 mb-5 bg-body rounded '>
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
        </div>
    )
}

export default Register

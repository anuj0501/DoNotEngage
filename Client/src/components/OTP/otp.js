import React from 'react'
import "./otp.css"

const otp = () => {
    return (
        <div className='otp'>
            <form method="POST">
                <div class="d-flex justify-content-center align-items-center container">
                    <div class="card py-5 px-3">
                        <h2 class="m-0">Email verification</h2><span class="mobile-text">Enter the code we just sent on your email  <b class="text-danger"></b></span>
                        <div class="d-flex flex-row mt-5"><input type="text" class="form-control" autofocus="" name="otp"/></div>
                        <br/>
                        <button class="btn btn-danger" type="submit">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default otp

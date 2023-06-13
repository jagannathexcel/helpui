import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='offset-md-4 col-md-4'>
                        <div className='d-flex justify-content-center mt-5 pt-5'>
                            <div className='card card-body p-4'>
                                <Link className="navbar-brand text-center" to={'/'}>
                                    <span className='fw-bold h3 text-dark'><i className="bi bi-box"></i><span className=''>StackBites</span></span>
                                </Link>
                                <h3>Welcome to StackBites!</h3>
                                <p>Please sign-in to your account and start the adventure</p>
                                <div>
                                    <div className="form-floating">
                                        <input type="email" className="form-control" id="floatingInputGrid" placeholder="name@example.com"/>
                                        <label for="floatingInputGrid">Email address</label>
                                    </div>
                                    <div className="form-floating mt-3">
                                        <input type="password" className="form-control" id="floatingInputGrid" placeholder="****"/>
                                        <label for="floatingInputGrid">Password</label>
                                    </div>
                                    <div className="d-grid gap-2">
                                    <button className='btn-block btn btn-dark mt-3'>Login</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

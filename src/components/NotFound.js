import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div>
      <div className='text-center mt-5 pt-5'>
        <h1>404</h1>
        <h2>Page Not Found </h2>
        <h5>We couldn′t find the page you are looking for.</h5>
        <img height={400} src='https://demos.themeselection.com/materio-mui-react-nextjs-admin-template-free/images/pages/404.png'/>
        <div>
        <Link className='btn btn-primary' to={'/'}>Back to Home</Link>
        </div>
      </div>
    </div>
  )
}

import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { toggleTheme } from '../services/ProxyService';
import logo from './../images/stack-bites-round-160.svg'

export default function Header() {
    const theme = localStorage.getItem('theme');
    const toggleGTheme = () => {
        if (theme == 'light') {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    }
    useEffect(() => {
        // console.log('header');
    }, [])
    return (
        <div className='fixed-top'>
            <nav className={`navbar p-0 navbar-expand-lg navbar-light bg-light shadow `}>
                <div className="container">
                    <Link className="navbar-brand mt-1" to={'/'}>
                        <span className='mt-3'>
                            <img className='' height={40} src={logo} />
                            <span className='ms-2'>Stack <b>Bites</b></span>
                        </span>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to={'/'}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'/about'}>About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'/tags'}>Tags</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'/questions'}>Questions</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'/articles'}>Articles</Link>
                            </li>
                        </ul>
                        <form className="d-flex">
                            {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" /> */}
                            <Link className="btn btn-sm btn-outline-dark" to={'/login'} type="submit">Login</Link>
                            {/* <div className="" onClick={() => { toggleGTheme() }}>
                                <button><i className={`bi bi-lightbulb${theme == 'light' ? '' : '-fill'}`}></i></button>
                            </div> */}
                        </form>
                    </div>
                </div>
            </nav>

        </div>
    )
}

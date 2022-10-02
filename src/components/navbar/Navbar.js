import React from 'react';
import Logo from '../images/logo-ucoder.png';
import '../navbar/Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg mt-2 bg-white sticky-top">
                <div className="container-fluid">
                    <Link className="navbar-brand mt-2" to={"/"}><img className='logo' src={Logo} alt="logo" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to={"/"}>Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to={"/aboutus"}>About Me</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to={"/videos"}>Videos</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to={"/blogs"}>Blogs</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to={"/connectwithme"}>Connect With Me</Link>
                        </li>
                    </ul>
                    <form className="d-flex" role="search" action='#something'>
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn" type="submit"><i class='bx bx-search'></i></button>
                    </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
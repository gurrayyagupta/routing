import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div>
            {/* <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link> */}
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <Link class="nav-link active" to="/">Home</Link>
                        <Link class="nav-link" to="/about">About</Link>
                        <Link class="nav-link" to="/contact">Contact</Link>
                        <Link class="nav-link" to="/products">products</Link>
                     </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav
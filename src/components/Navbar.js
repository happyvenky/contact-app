import React from 'react'
import {Link} from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav class="navbar navbar-dark bg-dark">
            <div class="container-fluid">
                <Link to="/" className="navbar-brand">
                    <strong>Venky</strong>
                </Link>
            </div>
        </nav>
    )
}

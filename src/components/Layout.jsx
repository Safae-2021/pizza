import React from "react";
import {Link } from "react-router-dom";
import logo from '../assets/logo-pizza.webp';
import '../styles/Layout.css';

export default function Layout() {
    return (
        <div className="position-sticky">
            <nav class="navbar navbar-expand-lg bg-dark">
                <div class="container-fluid">
                    <Link class="navbar-brand" to="/"><img src={logo}  className="img-width" alt="logo"/></Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link text-white" aria-current="page" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link text-white" to="/menu">Menu</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link text-white" to="/about">About</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link text-white" to="/contact">Contact</Link>
                            </li>
                            <li class="nav-item">
                                <p className="nav-link pointer text-white">Cart</p>
                            </li>
                        </ul>
                        {/* <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button class="btn btn-outline-success" type="submit">Search</button>
                        </form> */}
                    </div>
                </div>
            </nav>
        </div>
    )
}
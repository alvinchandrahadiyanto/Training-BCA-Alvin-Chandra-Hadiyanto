import React from "react";
import * as Icon from "react-feather"; //mengambil icon dari react-feather
import { Link } from "react-router-dom" //melakukan import link dari "react-router-dom"
import { IMAGE } from "./constant"; //melakukan import variabel path image dari ./constant

export default function Navbar({open, setOpen}) {
    function handleClick() {
        setOpen(open => !open)
    }

    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-white shadow">
                <div className="container-fluid px-4">
                    <div
                        className="collapse navbar-collapse d-flex justify-content-between"
                        id="navbarSupportedContent"
                    >
                        <ul class="navbar-nav mb-2 mb-lg-0">
                            <li
                                onClick={handleClick}
                                className="nav-item my-auto"
                            >
                                <Icon.Menu /> {/* ini import untuk icon menu */}
                            </li>
                            <li class="nav-item my-auto" onclick="toggledNavigation()">
                                <i data-feather="menu"></i>
                            </li>
                            <li class="nav-item dropdown ms-3">
                                <a class="nav-link dropdown-toggle font-medium color-primary" href="#" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    All Categories
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle font-medium color-primary" href="#" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    All Time
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                </ul>
                            </li>
                        </ul>
                        <div className="search" role="search">
                            <i className="icon-search">
                                <Icon.Search color="#D0CCCC" />
                            </i> {/* Icon.Search untuk melakukan import search */}
                            <input
                                className="form-control rounded-pill color-primary py-2"
                                type="search"
                                placeholder="Search book"
                                aria-label="Search"
                            />
                        </div>
                        <Link
                            to={"/dashboard"}
                            className="navbar-brand d-flex align-items-center justify-content-center me-0"
                        >
                            <img
                                src={IMAGE.MAIN_LOGO}
                                width="40px"
                                alt="Logo"
                            />
                            <div className="fs-4 font-medium ms-2">Library</div>
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
}

import React from "react";
import * as Icon from "react-feather";
import { Link } from "react-router-dom"
import { IMAGE } from "./constant";

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
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li
                                onClick={handleClick}
                                className="nav-item my-auto"
                            >
                                <Icon.Menu />
                            </li>
                            <li className="nav-item dropdown ms-3">
                                <Link
                                    to={"/"}
                                    className="nav-link dropdown-toggle font-medium color-primary"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    All Categories
                                </Link>
                                <ul className="dropdown-menu">
                                    <li>
                                        <Link
                                            to={"/"}
                                            className="dropdown-item"
                                        >
                                            Action
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to={"/"}
                                            className="dropdown-item"
                                        >
                                            Another action
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <Link
                                    to={"/"}
                                    className="nav-link dropdown-toggle font-medium color-primary"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    All Time
                                </Link>
                                <ul className="dropdown-menu">
                                    <li>
                                        <Link
                                            to={"#"}
                                            className="dropdown-item"
                                        >
                                            Action
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to={"#"}
                                            className="dropdown-item"
                                        >
                                            Another action
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <div className="search" role="search">
                            <i className="icon-search">
                                <Icon.Search color="#D0CCCC" />
                            </i>
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

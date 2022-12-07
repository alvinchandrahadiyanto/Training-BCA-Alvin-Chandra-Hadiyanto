import React from "react";
import { IMAGE } from "../../components/constant";
import "./index.css";
import { Link } from "react-router-dom";

export default function Register() {
    return (
        <div className="row">
            <div className="col-md-8 col-lg-8 bg-primary p-0 cover">
                <div className="d-flex h-100 flex-column justify-content-between">
                    <h1 className="home-title title-cover font-medium">
                        Book is a window <br /> to the world
                    </h1>
                    <h5 className="title-cover cover-footer font-medium pb-3">
                        Photo by Mark Pan4ratte on Unsplash
                    </h5>
                </div>
            </div>
            <div className="col-md-4 col-lg-4">
                <div className="row h-cover">
                    <div className="d-flex flex-column">
                        <div className="logo ms-auto p-3 d-none d-lg-block">
                            <img src={IMAGE.MAIN_LOGO} alt="Logo Brand" />
                        </div>
                        <div className="content mt-5">
                            <div className="head mb-5 color-primary">
                                <h1
                                    id="title"
                                    className="fw-bold font-xtrabold"
                                >
                                    Login
                                </h1>
                                <p id="subtitle">
                                    Welcome Back, Please Login <br /> to your
                                    account.
                                </p>
                            </div>
                            <form>
                                    <div>
                                        <div className="shadow rounded-2 mb-5">
                                            <div className="form-floating">
                                                <input
                                                    type="text"
                                                    className="form-control focus-ring-0 rounded-0 rounded-top"
                                                    id="username"
                                                    placeholder="yourname"
                                                    autoFocus
                                                />
                                                <label htmlFor="username" className="color-primary">
                                                    Username
                                                </label>
                                            </div>
                                            <div className="form-floating">
                                                <input
                                                    type="text"
                                                    className="form-control focus-ring-0 rounded-0 border-top-0"
                                                    id="fullname"
                                                    placeholder="John Doe"
                                                />
                                                <label htmlFor="fullname" className="color-primary">
                                                    Full name
                                                </label>
                                            </div>
                                            <div className="form-floating">
                                                <input
                                                    type="email"
                                                    className="form-control focus-ring-0 rounded-0 border-top-0"
                                                    id="email"
                                                    placeholder="name@example.com"
                                                />
                                                <label htmlFor="email" className="color-primary">
                                                    Email
                                                </label>
                                            </div>
                                            <div className="form-floating">
                                                <input
                                                    type="password"
                                                    className="form-control focus-ring-0 rounded-0 rounded-bottom border-top-0"
                                                    id="password"
                                                    placeholder="Password"
                                                />
                                                <label htmlFor="password" className="color-primary">
                                                    Password
                                                </label>
                                            </div>
                                        </div>
                                        <div className="row d-flex justify-content-between align-items-center mb-5">
                                            <div className="col-lg-6 col-md-12">
                                                <div className="form-check">
                                                    <input
                                                        type="checkbox"
                                                        id="remember"
                                                        className="form-check-input"
                                                    />
                                                    <label
                                                        htmlFor="remember"
                                                        className="form-check-label"
                                                    >
                                                        <small className="color-secondary">
                                                            Remember me
                                                        </small>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-12">
                                                <p className="color-primary d-sm-none d-lg-block text-end mb-0">
                                                    <small>Forgot password</small>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                <Link
                                    to={"/"}
                                    className="btn btn-dark px-4 me-1"
                                >
                                    Login
                                </Link>
                                <Link
                                    to={"/register"}
                                    className="btn btn-outline-secondary color-secondary px-4"
                                >
                                    Sign up
                                </Link>
                            </form>
                        </div>
                        <div className="footer fw-semibold font-bold color-primary mt-auto">
                            <span className="color-secondary font-bold">
                                By signing up, you agree to Book's
                            </span>
                            <br /> Terms and Condition
                            <span className="color-secondary font-bold">&</span>
                            Privacy Policy
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

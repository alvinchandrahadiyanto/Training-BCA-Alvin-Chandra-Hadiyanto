import React from "react";
import { Link } from "react-router-dom"

export default function SidebarLogout({open}) {
    return (
        <div
            className={
                open
                    ? "side-navigation shadow side-open"
                    : "side-navigation shadow"
            }
        >
            <div className="d-flex flex-column justify-content-center align-items-center mb-5">
                <div className="rouded-pill account0 mb-2"></div>
                <div className="font-medium fs-5 mb-2">Profile</div>
                <Link to={"/"} className="p-0">
                    <button className="btn btn-outline-dark logout font-medium color-primary fs-6">
                        <i
                            data-feather="arrow-right-circle"
                            width="18px"
                            className="color-primary me-1 my-auto"
                        ></i>
                        Login
                    </button>
                </Link>
            </div>
        </div>
    );
}

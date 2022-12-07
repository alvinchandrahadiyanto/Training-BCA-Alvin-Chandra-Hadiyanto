import React from "react";
import { Link } from "react-router-dom"

export default function Sidebar({open}) {
    return (
        <div
            className={
                open
                    ? "side-navigation shadow side-open"
                    : "side-navigation shadow"
            }
        >
            <div className="d-flex flex-column justify-content-center align-items-center mb-5">
                <div className="rouded-pill account mb-2"></div>
                <div className="font-medium fs-5 mb-2">Niki Zefanya</div>
                <Link to={"/"} className="p-0">
                    <button className="btn btn-outline-dark logout font-medium color-primary fs-6">
                        <i
                            data-feather="arrow-right-circle"
                            width="18px"
                            className="color-primary me-1 my-auto"
                        ></i>
                        Logout
                    </button>
                </Link>
            </div>
            <Link to={"/books"} className="font-medium color-primary mb-4">
                Explore
            </Link>
            <Link to={"#"} className="font-medium color-primary mb-4">
                History
            </Link>
            <Link
                to={"#"}
                className="font-medium color-primary mb-4"
                data-bs-toggle="modal"
                data-bs-target="#modal"
            >
                Add Book
            </Link>
        </div>
    );
}

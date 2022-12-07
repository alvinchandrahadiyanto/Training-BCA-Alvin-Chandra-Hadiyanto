import React from "react";
import { Link } from "react-router-dom"

export default function ButtonLink(props) {
    return (
        <Link
            {...props}
            className="nav-link font-medium text-white"
        >
            {props.value}
        </Link>
    );
}

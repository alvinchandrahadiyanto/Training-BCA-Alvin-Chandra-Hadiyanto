import React from "react";

export default function Button({type = 'text', custom, title, ...props}) {
    return (
        <button
            {...props}
            type={type}
            className={`${custom} btn background-warning text-white py-2 px-4`}
        >
            {title}
        </button>
    );
}

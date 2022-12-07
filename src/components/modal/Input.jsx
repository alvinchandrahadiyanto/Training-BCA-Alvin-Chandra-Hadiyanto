import React from "react";

function Input({ children }) {
    return <div className="row mb-3">{children}</div>;
}

function Title({ children }) {
    return (
        <div className="col-md-12 col-lg-2 col-form-label font-medium">
            {children}
        </div>
    );
}

function Body({type = 'text', ...props}) {
    return (
        <div className="col-md-12 col-lg-10">
            <input
                type={type}
                className="form-control py-2"
                {...props}
            />
        </div>
    );
}

function TextArea(props) {
    return (
        <div className="col-md-12 col-lg-10">
            <textarea className="form-control" {...props}></textarea>
        </div>
    );
}

Input.Title = Title;
Input.Body = Body;
Input.TextArea = TextArea;

export default Input;

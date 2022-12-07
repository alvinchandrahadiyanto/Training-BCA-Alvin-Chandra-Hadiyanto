import React from "react";

function ModalComponent({ children }) {
    return (
        <div
            className="modal fade"
            id="modal"
            tabIndex="-1"
            aria-labelledby="modal"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-lg">
                <div className="modal-content p-4">{children}</div>
            </div>
        </div>
    );
}

function Header({ children }) {
    return (
        <div className="modal-header border-0">
            <h1 className="modal-title font-medium fs-4">{children}</h1>
            <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
            ></button>
        </div>
    );
}

function Body({ children }) {
    return (
        <div>
            <div className="modal-body">
                {children}
            </div>
        </div>
    );
}

function Footer({ children }) {
    return (
        <div className="modal-footer border-0">
            {children}
        </div>
    );
}

ModalComponent.Header = Header
ModalComponent.Body = Body
ModalComponent.Footer = Footer

export default ModalComponent;

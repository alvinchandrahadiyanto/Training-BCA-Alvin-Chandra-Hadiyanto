import React, { useState } from "react";
import * as Icon from "react-feather";

export default function ModalDelete(props) {
    // console.log(props.dataIsDeleted);
    const [closeModal, setCloseModal] = useState(false)

    function handleCloseModal() {
        setCloseModal(true)
    }
    
    return (
        <div
            // className="modal fade"
            // id="modalDelete"
            // tabIndex="-1"
            // aria-labelledby="modalDelete"
            // aria-hidden="true"

            className={closeModal === true ? "modal fade" : "modal fade show"}
            id="modalDelete"
            tabIndex="-1" 
            aria-labelledby="modalDelete" 
            aria-modal={closeModal === true ? "false" : "true"} 
            aria-hidden={closeModal === true ? "false" : "true"}
            role={closeModal === true ? "" : "dialog"} 
            style={{ display: `${closeModal === true ? "none" : "block"}` }}
        >
            <div className="modal-dialog modal-dialog-centered modal-md">
                <div className="modal-content p-2">
                    <div className="modal-header border-0">
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                            onClick={handleCloseModal}
                        ></button>
                    </div>
                    <div className="modal-body pb-5">
                        <div className="d-flex flex-column w-100 align-items-center justify-content-center">
                            <div className="mb-3">
                                <Icon.CheckCircle
                                    color="#99D815"
                                    width={80}
                                    height={80}
                                />
                            </div>
                            <p className="text-center fs-5 mb-0">
                                Data{" "}
                                <span className="font-medium">
                                    {props.book}
                                </span>{" "}
                                berhasil dihapus.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

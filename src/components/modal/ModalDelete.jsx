import React, { useState } from "react";
import * as Icon from "react-feather"; // import icon dari "react-feather"

export default function ModalDelete(props) { //props digunakan untuk megubah dari object menjadi string
    const [closeModal, setCloseModal] = useState(false) //const [closeModal, setCloseModal] adalah nama variabel 
    //useState digunakan untuk menentukan nilai data saat itu dengan tambahan function dispatchAction() jadi ada 2 elemen yaitu isi variabel dan function dispatchAction()
    //closeModal berisi nilai false sedangkan setCloseModal diisi oleh function dispatchAction()
    // const [closeModal, setCloseModal] namanya destructuring

    function handleCloseModal() {
        setCloseModal(true)
    }
    
    return (
        <div
            className={closeModal === true ? "modal fade" : "modal fade show"} //bila closeModal bernilai true maka className="modal fade" tetapi bila closeModal bernilai false maka className="modal fade show"

            id="modalDelete" 
            tabIndex="-1" 
            aria-labelledby="modalDelete" 
            aria-modal={closeModal === true ? "false" : "true"} //bila closeModal bernilai true maka aria-modal="false" tetapi bila closeModal bernilai false maka aria-modal="true"

            aria-hidden={closeModal === true ? "false" : "true"} //bila closeModal bernilai true maka aria-hidden="false" tetapi bila closeModal bernilai false maka aria-hidden="true"
            role={closeModal === true ? "" : "dialog"} //bila closeModal bernilai true maka role="" tetapi bila closeModal bernilai false maka role="dialog"
            style={{ display: `${closeModal === true ? "none" : "block"}` }} //bila closeModal bernilai true maka display: "none" tetapi bila closeModal bernilai false maka display: "block"
        >
            <div className="modal-dialog modal-dialog-centered modal-md">
                <div className="modal-content p-2">
                    <div className="modal-header border-0">
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                            onClick={handleCloseModal} //memanggil function handleCloseModal ketika tombol diklik
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

import React, { useState } from "react";
import Card from "../../components/Card"; //melakukan import card dari components
import Navbar from "../../components/Navbar"; //melakukan import Navbar dari components
import Sidebar from "../../components/Sidebar"; //melakukan import Sidebar dari components
import { books } from "./dataBooks"; //melakukan import dari data buku pada file databooks
import ModalDelete from "../../components/modal/ModalDelete"; //melakukan import ModalDelete dari components

export default function Books() {
    const [open, setOpen] = useState(false); //const [open, setOpen] adalah nama variabel 
    //useState digunakan untuk menentukan nilai data saat itu dengan tambahan function dispatchAction() jadi ada 2 elemen yaitu isi variabel dan function dispatchAction()
    //open berisi nilai false sedangkan setOpen diisi oleh function dispatchAction()
    // const [open, setOpen] namanya destructuring
    const [listBooks, setListBooks] = useState(books); //const [listBooks, setListBooks] adalah nama variabel 
    //useState digunakan untuk menentukan nilai data saat itu dengan tambahan function dispatchAction() jadi ada 2 elemen yaitu isi variabel dan function dispatchAction()
    //listBooks berisi nilai false sedangkan setOpen diisi oleh function dispatchAction()
    // const [listBooks, setListBooks] namanya destructuring

    const titleModalDelete = localStorage.getItem("title-modal")
    const statusDelete = localStorage.getItem("modal-status")

    return (
        <div>
            <Sidebar open={open} /> {/* ini untuk membuka sidebar  */}
            <div className={open ? "wrapper wrapper-open" : "wrapper"}>
                <Navbar open={open} setOpen={setOpen} /> {/* ini untuk membuka navbar  */}
                <div>
                    {
                        titleModalDelete && statusDelete ?
                        <ModalDelete book={titleModalDelete} /> : ""
                    } {/* ini adalah if untuk membuka ModalDelete  */}
                    <div className="container-fluid px-4">
                        <div className="d-flex align-items-center justify-content-between pt-5 pb-3">
                            <h5 className="font-medium">List Book</h5>
                            <button
                                data-bs-toggle="modal"
                                data-bs-target="#modal"
                                className="btn background-warning text-white py-2 px-4"
                            >
                                Add Book
                            </button>
                        </div>
                        <div className="d-flex flex-wrap gap-4 justify-content-center">
                            {listBooks.length > 0 ? listBooks.map((book, index) => {
                                return (
                                    <Card
                                        key={index} //index dalam array dipakai untuk key karena unik
                                        id={book.id} //mengambil id dari array book
                                        title={book.title} //mengambil title dari array book
                                        image={book.image} //mengambil lokasi path image dari array book
                                        height={"16rem"} //menentukan height dalam card untuk book
                                    />
                                );
                            }) : <h5 className="font-medium">Data Kosong</h5> }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

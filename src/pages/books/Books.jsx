import React, { useState } from "react";
import Card from "../../components/Card";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Modal from "../../components/modal/Modal";
import Button from "../../components/button/Button";
import { books } from "./dataBooks";
import ModalDelete from "../../components/modal/ModalDelete";

export default function Books() {
    const [open, setOpen] = useState(false);
    const [openModal, setOpenModal] = useState(true);
    const [listBooks, setListBooks] = useState(books);
    const [isUpdate, setIsUpdate] = useState({
        id: null,
        status: false
    })

    const titleModalDelete = localStorage.getItem("title-modal")
    const statusDelete = localStorage.getItem("modal-status")

    function getBooks(data) {
        setListBooks(data);
    }

    function isModalOpen(data) {
        setOpenModal(data);
    }

    return (
        <div>
            <Sidebar open={open} />
            <div className={open ? "wrapper wrapper-open" : "wrapper"}>
                <Navbar open={open} setOpen={setOpen} />
                <div>
                    {
                        titleModalDelete && statusDelete ?
                        <ModalDelete book={titleModalDelete} /> : ""
                    }
                    <Modal
                        title={"Add data"}
                        onSubmit={getBooks}
                        modal={isModalOpen}
                        dataIsUpdate={isUpdate}
                    />
                    <div className="container-fluid px-4">
                        <div className="d-flex align-items-center justify-content-between pt-5 pb-3">
                            <h5 className="font-medium">List Book</h5>
                            <Button
                                data-bs-toggle="modal"
                                data-bs-target="#modal"
                                title="Add Book"
                            />
                        </div>
                        <div className="d-flex flex-wrap gap-4 justify-content-center">
                            {listBooks.length > 0 ? listBooks.map((book, index) => {
                                return (
                                    <Card
                                        key={index}
                                        id={book.id}
                                        title={book.title}
                                        image={book.image}
                                        height={"16rem"}
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

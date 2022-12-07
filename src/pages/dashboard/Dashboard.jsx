import React, { useState } from "react";
import Carousel from "../../components/carousel/Carousel";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Card from "../../components/Card";
import Modal from "../../components/modal/Modal";
import { books } from "../books/dataBooks";
import ModalDelete from "../../components/modal/ModalDelete";

export default function Dashboard() {
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
                <main>
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
                    <Carousel />
                    <div className="container-fluid px-4">
                        <div className="d-flex align-items-center justify-content-between pt-5 pb-3">
                            <h5 className="font-medium">List Book</h5>
                        </div>
                        <div className="d-flex flex-wrap justify-content-center align-items-center gap-4 w-100">
                            {listBooks.length > 0 ? listBooks.map((book, index) => {
                                return (
                                    <Card
                                        key={index}
                                        id={book.id}
                                        title={book.title}
                                        image={book.image}
                                        desc={book.description}
                                        height={"20rem"}
                                    />
                                );
                            }) : <h5 className="font-medium">Data Kosong</h5>}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Icon from "react-feather";
import ButtonLink from "../../components/button/ButtonLink";
import Modal from "../../components/modal/Modal";
import ModalDelete from "../../components/modal/ModalDelete";
import { useParams } from "react-router-dom";
import { books } from "../books/dataBooks";
import Button from "../../components/button/Button";

export default function DetailsBook() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [openModal, setOpenModal] = useState(true);
    const [listBooks, setListBooks] = useState(books);
    const [isUpdate, setIsUpdate] = useState({
        id: null,
        status: false,
    });
    const [isDeleted, setIsDeleted] = useState({
        title: "",
        status: false
    })

    const book = listBooks.find((data) => {
        return String(data.id) === id;
    });

    function goBack() {
        navigate(-1);
    }

    function getBooks(data) {
        setListBooks(data);
    }

    function isModalOpen(data) {
        setOpenModal(data);
    }

    function handleEdit() {
        setIsUpdate({ id: book.id, status: true });
    }

    function handleDelete(e) {
        // e.preventDefault();
        setIsDeleted({ title: book.title, status: true });
        localStorage.setItem("modal-status", false)
        if (window.confirm("Do you agree to delete this book?")) {
            const removedBook = books.findIndex(
                (data) => String(data.id) === id
            );
            books.splice(removedBook, 1);
            navigate(-1);
            localStorage.setItem("modal-status", true)
            localStorage.setItem("title-modal", book.title )
            setTimeout(() => {
                localStorage.removeItem("modal-status")
                localStorage.removeItem("title-modal")
            }, 2000);
        }
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-none">
                <div className="container-fluid px-4">
                    <div
                        className="collapse navbar-collapse d-flex justify-content-between"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item my-auto">
                                <button
                                    onClick={goBack}
                                    className="btn bg-white rounded-circle shadow p-3"
                                >
                                    <Icon.ArrowLeft width={28} height={26} />
                                </button>
                            </li>
                        </ul>
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item my-auto">
                                <ButtonLink
                                    onClick={handleEdit}
                                    to={"#"}
                                    data-bs-toggle="modal"
                                    data-bs-target="#modal"
                                    value={"Edit"}
                                />
                            </li>
                            <li className="nav-item my-auto">
                                <ButtonLink
                                    to={"#"}
                                    onClick={handleDelete}
                                    // data-bs-toggle="modal"
                                    // data-bs-target="#modalDelete"
                                    value={"Delete"}
                                />
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Modal
                title={"Edit data"}
                onSubmit={getBooks}
                modal={isModalOpen}
                dataBook={book}
                dataIsUpdate={isUpdate}
            />
            {/* <ModalDelete dataIsDeleted={isDeleted} /> */}
            {book && (
                <div>
                    <section style={{ height: "42vh" }}>
                        <div
                            className="hero-image"
                            style={{
                                backgroundImage: `url(${book.image})`,
                            }}
                        ></div>
                        <div className="container d-flex justify-content-end">
                            <div className="hero-brand rounded-3 overflow-hidden shadow">
                                <div
                                    className="img-brand"
                                    style={{
                                        backgroundImage: `url(${book.image})`,
                                    }}
                                ></div>
                            </div>
                        </div>
                    </section>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-8">
                                <div className="">
                                    <div className="d-flex align-items-center justify-content-between py-3">
                                        <div className="d-block">
                                            <div className="badge font-medium py-2 px-4 background-warning dark rounded-pill">
                                                {book.genre}
                                            </div>
                                            <div
                                                id="bookTitle"
                                                className="font-bold fs-3 py-1"
                                            >
                                                {book.title}
                                            </div>
                                            <p className="font-medium">
                                                {book.released}
                                            </p>
                                        </div>
                                        <div className="font-bold fs-4 color-success">
                                            {book.status}
                                        </div>
                                    </div>
                                    <div className="pt-3">
                                        <p className="mb-0">
                                            {book.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="d-flex justify-content-end h-100 align-items-end">
                                    <Button
                                        custom={"font-medium fs-5 py-2 px-5"}
                                        title={"Borrow"}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom"; // mengimport useNavigate dan Link dari "react-router-dom" pada https://reactrouter.com/en/main/hooks/use-navigate
import * as Icon from "react-feather";
import { useParams } from "react-router-dom";
import { books } from "./dataBooks";

export default function DetailsBook() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [listBooks, setListBooks] = useState(books); //const [listBooks, setListBooks] adalah nama variabel 
    //useState digunakan untuk menentukan nilai data saat itu dengan tambahan function dispatchAction() jadi ada 2 elemen yaitu isi variabel dan function dispatchAction()
    //listBooks berisi nilai false sedangkan setOpen diisi oleh function dispatchAction()
    // const [listBooks, setListBooks] namanya destructuring
    const [isDeleted, setIsDeleted] = useState({
        title: "",
        status: false
    }); //const [isDeleted, setIsDeleted] adalah nama variabel 
    //useState digunakan untuk menentukan nilai data saat itu dengan tambahan function dispatchAction() jadi ada 2 elemen yaitu isi variabel dan function dispatchAction()
    //isDeleted berisi nilai false sedangkan setOpen diisi oleh function dispatchAction()
    // const [isDeleted, setIsDeleted] namanya destructuring

    const book = listBooks.find((data) => {
        return String(data.id) === id;
    }); // mencari data dari sebuah buku yang akan mengeluarkan id dari buku yang dicari

    function goBack() {
        navigate(-1); // melakukan navigate ke halaman sebelum detail yaitu dashboard
    }

    function handleDelete(e) {
        setIsDeleted({ title: book.title, status: true });
        localStorage.setItem("modal-status", false)
        if (window.confirm("Do you agree to delete this book?")) { // menampilkan pop up apakah buku mau dihapus
            const removedBook = books.findIndex(
                (data) => String(data.id) === id
            ); // melakukan filter untuk menentukan buku mana yang mau dihapus
            books.splice(removedBook, 1);
            navigate(-1); // melakukan navigate ke halaman sebelum detail yaitu dashboard
            localStorage.setItem("modal-status", true) // menampilkan buku yang mau dihapus
            localStorage.setItem("title-modal", book.title ) // menampilkan buku yang mau dihapus
            setTimeout(() => {
                localStorage.removeItem("modal-status")
                localStorage.removeItem("title-modal")
            }, 2000); //melakukan delay sewaktu remove book agar bisa muncul popup 
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
                                <Link
                                    to={"#"}
                                    data-bs-toggle="modal"
                                    data-bs-target="#modal"
                                    className="nav-link font-medium text-white"
                                >
                                    Edit
                                </Link>
                            </li>
                            <li className="nav-item my-auto">
                                <Link
                                    to={"#"}
                                    onClick={handleDelete}
                                    // data-bs-toggle="modal"
                                    // data-bs-target="#modalDelete"
                                    className="nav-link font-medium text-white"
                                >
                                    Delete
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
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
                                <button
                                    className="font-medium fs-5 py-2 px-5 btn background-warning text-white py-2 px-4"
                                >
                                    Borrow
                                </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

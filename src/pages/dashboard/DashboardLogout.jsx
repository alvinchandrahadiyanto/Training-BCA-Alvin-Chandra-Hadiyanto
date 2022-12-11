import React, { useState } from "react";
import Carousel from "../../components/carousel/Carousel";
import Navbar from "../../components/Navbar";
import SidebarLogout from "../../components/SidebarLogout";
import Card from "../../components/Card";
import { books } from "../books/dataBooks";
import ModalDelete from "../../components/modal/ModalDelete";

export default function Dashboard() {
    const [open, setOpen] = useState(false); //const [open, setOpen] adalah nama variabel 
    //useState digunakan untuk menentukan nilai data saat itu dengan tambahan function dispatchAction() jadi ada 2 elemen yaitu isi variabel dan function dispatchAction()
    //open berisi nilai false sedangkan setOpen diisi oleh function dispatchAction()
    // const [open, setOpen] namanya destructuring
    const [listBooks, setListBooks] = useState(books); //const [listBooks, setListBooks] adalah nama variabel 
    //useState digunakan untuk menentukan nilai data saat itu dengan tambahan function dispatchAction() jadi ada 2 elemen yaitu isi variabel dan function dispatchAction()
    //listBooks berisi nilai dari books sedangkan setListBooks diisi oleh function dispatchAction()
    // const [listBooks, setListBooks] namanya destructuring

    const titleModalDelete = localStorage.getItem("title-modal")
    const statusDelete = localStorage.getItem("modal-status")

    return (
        <div>
            <SidebarLogout open={open} />
            <div className={open ? "wrapper wrapper-open" : "wrapper"}> {/* if apakah isi data open true atau false, bila true maka className="wrapper wrapper-open" bila open isinya false maka className="wrapper" */}
                <Navbar open={open} setOpen={setOpen} /> {/* untuk melakukan open pada Navbarnya */}
                <main>
                    {
                        titleModalDelete && statusDelete ?
                        <ModalDelete book={titleModalDelete} /> : ""
                    } {/* apabila titleModalDelete && statusDelete bernilai true maka bukunya akan dihapus dari list booknya */}
                    <Carousel />
                    <div className="container-fluid px-4">
                        <div className="d-flex align-items-center justify-content-between pt-5 pb-3">
                            <h5 className="font-medium">List Book</h5>
                        </div>
                        <div className="d-flex flex-wrap justify-content-center align-items-center gap-4 w-100">
                            {listBooks.length > 0 ? listBooks.map((book, index) => {
                                return (
                                    <Card
                                        key={index} //index dalam array dipakai untuk key karena unik
                                        id={book.id} // mengambil id dari array book
                                        title={book.title} // mengambil title dari array book
                                        image={book.image} // mengambil image dari array book
                                        desc={book.description} // mengambil description dari array book
                                        height={"20rem"} // mengatur height pada card
                                    />
                                );
                            }) : <h5 className="font-medium">Data Kosong</h5>} {/* apabila list book ada isinya maka akan ditampilkan isi dari list booknya tetapi bila kosong maka akan ditampilkan "Data Kosong" */}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

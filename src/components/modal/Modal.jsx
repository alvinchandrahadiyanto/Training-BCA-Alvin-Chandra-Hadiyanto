import React, { useState } from "react";
import Button from "../button/Button";
import Input from "./Input";
import ModalComponent from "./ModalComponent";
import { books } from "../../pages/books/dataBooks";

export default function Modal(props) {
    const statusOptions = ["Available", "Not Available"];

    const genreOptions = [
        "Action",
        "Fantasy",
        "Music",
        "Adventure",
        "Crime",
        "History",
    ];

    const [listBooks, setListBooks] = useState(books);

    const [form, setForm] = useState({
        id: null,
        title: props.dataBook !== undefined && props.dataBook.title || "",
        genre: "",
        status: "",
        released: "",
        image: props.dataBook !== undefined && props.dataBook.image || "https://picsum.photos/600/300",
        description: props.dataBook !== undefined && props.dataBook.description || "",
    });

    function onChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    function submitHandler(e) {
        e.preventDefault();
        if (form.title === "") {
            alert("Data title can't null.");
            return false;
        }

        if (props.dataIsUpdate.status) {
            books.map((book) => {
                if (book.id === props.dataIsUpdate.id) {
                    book.title = form.title;
                    book.description = form.description;
                    book.image = form.image;
                }
            });
        } else {
            listBooks.push({
                id: Math.floor(Math.random() * Date.now()),
                title: form.title,
                genre: genreOptions[
                    Math.floor(Math.random() * genreOptions.length)
                ],
                status: statusOptions[
                    Math.floor(Math.random() * statusOptions.length)
                ],
                released: new Date().toDateString(),
                image: form.image,
                description: form.description,
            });
        }

        setListBooks(listBooks);

        setForm({
            ...form,
            title: "",
            description: "",
        });

        props.onSubmit(listBooks);
        props.modal((openModal) => !openModal);
    }

    return (
        <form onSubmit={submitHandler}>
            <ModalComponent>
                <ModalComponent.Header>{props.title}</ModalComponent.Header>
                <ModalComponent.Body>
                    <Input>
                        <Input.Title>Url image</Input.Title>
                        <Input.Body
                            value={form.image}
                            onChange={onChange}
                            name={"image"}
                            id={"image"}
                            placeholder={"Enter url image"}
                        />
                    </Input>
                    <Input>
                        <Input.Title>Title</Input.Title>
                        <Input.Body
                            value={form.title}
                            onChange={onChange}
                            name={"title"}
                            id={"title"}
                            placeholder={"Enter your title"}
                        />
                    </Input>
                    <Input>
                        <Input.Title>Description</Input.Title>
                        <Input.TextArea
                            value={form.description}
                            onChange={onChange}
                            name={"description"}
                            id={"description"}
                            rows={"6"}
                            placeholder={"Enter the description"}
                        />
                    </Input>
                </ModalComponent.Body>
                <ModalComponent.Footer>
                    <Button type="submit" title={"Save"} />
                </ModalComponent.Footer>
            </ModalComponent>
        </form>
    );
}

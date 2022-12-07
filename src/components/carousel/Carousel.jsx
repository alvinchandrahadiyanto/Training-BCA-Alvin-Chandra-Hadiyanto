import React from "react";
import Flickity from "react-flickity-component";
import SliderCard from "./SliderCard";
import { books } from "../../pages/books/dataBooks";
import "./style.css";

export default function Carousel() {
    const flickityOptions = {
        initialIndex: 1,
        autoPlay: true,
        wrapAround: true,
    };
    return (
        <Flickity
            className={"carousel"}
            elementType={"div"}
            options={flickityOptions}
            disableImagesLoaded={false}
            reloadOnUpdate
            static
        >
            {books.map((book, index) => {
                console.log(books.map);
                const desc = book.description
                return (
                    <SliderCard
                        key={index}
                        image={book.image}
                        title={book.title}
                        desc={`${desc.slice(0, 30)}.`}
                    />
                );
            })}
        </Flickity>
    );
}

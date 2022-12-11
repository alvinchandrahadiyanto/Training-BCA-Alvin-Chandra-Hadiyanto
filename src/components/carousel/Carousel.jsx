import React from "react";
import Flickity from "react-flickity-component"; // adalah component eksternal untuk carousel dari https://flickity.metafizzy.co/
import SliderCard from "./SliderCard";
import { books } from "../../pages/books/dataBooks";
import "./style.css";

export default function Carousel() {
    const flickityOptions = {
        initialIndex: 1,
        autoPlay: true,
        wrapAround: true,
    }; //ini adalah variabel untuk mengatur Flickity

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
                const desc = book.description // mengambil description dari array book
                return (
                    <SliderCard
                        key={index} //index dalam array dipakai untuk key karena unik
                        image={book.image} // mengambil image dari array book
                        title={book.title} // mengambil title dari array book
                        desc={`${desc.slice(0, 30)}.`} // mengatur jarak title dengan desc
                    />
                );
            })}
        </Flickity>
    );
}

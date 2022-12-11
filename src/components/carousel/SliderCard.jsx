import React from "react"; // import React from "react" untuk melakukan import dari react

export default function SliderCard(props) { //props digunakan untuk megubah dari object menjadi string
    return (
        <div
            className="gallery-cell rounded-4 overflow-hidden shadow my-auto"
            style={{
                backgroundImage: `url(${props.image})`, // props.image untuk mendefinisikan lokasi dari gambar yang sudah ditentukan dalam card
            }}
        >
            <div className="content-label">
                <div className="bg-content-label rounded-bottom overflow-hidden"></div>
                <div className="px-5 pb-2">
                    <h3 className="text-white font-medium">{props.title}</h3> {/*props.title digunakan untuk mendefinisikan judul buku dalam card */}
                    <p className="text-white fs-6">{props.desc}</p> {/*props.desc digunakan untuk mendefinisikan judul buku dalam card */}
                </div>
            </div>
        </div>
    );
}

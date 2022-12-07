import React from "react";

export default function SliderCard(props) {
    return (
        <div
            className="gallery-cell rounded-4 overflow-hidden shadow my-auto"
            style={{
                backgroundImage: `url(${props.image})`,
            }}
        >
            <div className="content-label">
                <div className="bg-content-label rounded-bottom overflow-hidden"></div>
                <div className="px-5 pb-2">
                    <h3 className="text-white font-medium">{props.title}</h3>
                    <p className="text-white fs-6">{props.desc}</p>
                </div>
            </div>
        </div>
    );
}

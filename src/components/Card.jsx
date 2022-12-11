import React from "react";
import { Link } from "react-router-dom"; //import link dari "react-router-dom"

export default function Card(props) { //props digunakan untuk megubah dari object menjadi string
    return (
        <Link to={`/details/${props.id}`} className="text-decoration-none"> {/*props.desc untuk mengambil desc */}
            <div
                className="card rounded-4 overflow-hidden shadow"
                style={{ width: "16rem", minHeight: `${props.height}` }} //props.height untuk mengambil height
            >
                <div
                    style={{
                        backgroundImage: `url(${props.image})`, //props.image untuk mengambil image
                    }}
                    className="card-img-top"
                ></div>
                <div className="card-body">
                    <h5 className="text-center font-medium">{props.title}</h5> {/*props.image untuk mengambil image */}
                    <small>
                        {props.desc} {/*props.desc untuk mengambil desc */}
                    </small>
                </div>
            </div>
        </Link>
    );
}

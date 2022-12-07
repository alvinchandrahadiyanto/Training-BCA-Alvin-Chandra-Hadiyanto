import React from "react";
import { Link } from "react-router-dom"

export default function Card(props) {
    return (
        <Link to={`/details/${props.id}`} className="text-decoration-none">
            <div
                className="card rounded-4 overflow-hidden shadow"
                style={{ width: "16rem", minHeight: `${props.height}` }}
            >
                <div
                    style={{
                        backgroundImage: `url(${props.image})`,
                    }}
                    className="card-img-top"
                ></div>
                <div className="card-body">
                    <h5 className="text-center font-medium">{props.title}</h5>
                    <small>
                        {props.desc}
                    </small>
                </div>
            </div>
        </Link>
    );
}

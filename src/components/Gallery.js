import React from "react";

export default function Beranda() {
    return (
        <div>
            <h1 className="title">Galeri</h1>
            <div class="row">
                <div className="column">
                    <img src="adiwiyata1.jpg" alt="Snow"/>
                </div>
                <div className="column">
                    <img src="adiwiyata2.jpg" alt="Forest"/>
                </div>
                <div className="column">
                    <img src="adiwiyata3.jpeg" alt="Mountains"/>
                </div>
            </div>
        </div>
    )
}
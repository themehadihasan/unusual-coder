import React from "react";
import HeroBlogImg02 from '../images/hero-blog-img-02.png';
import '../videos/Videos.css'

function Videos() {

    return (
        <div className="container-lg">
            <div className="row mb-5">
                <div className="videosImage">
                    <img src={HeroBlogImg02} alt="heroBlog" />
                </div>
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">Videos</h4>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
            <hr />

            <hr />
        </div>
    )
}

export default Videos;
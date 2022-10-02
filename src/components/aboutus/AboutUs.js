import React from "react";
import HeroBlogImg02 from '../images/hero-blog-img-02.png';
import "../aboutus/AboutUs.css";

function AboutUs() {

    return (
        <div className="container-lg">
            <div className="row mb-5">
                <div className="aboutImage">
                    <img src={HeroBlogImg02} alt="heroBlog" />
                </div>
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">About Me</h4>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
            <hr />
            <div className="row text-center">
                <div class="card-body">
                    <h4 class="card-title mt-1">I'm here to listen, understand and solve your problems</h4>
                    <p class="card-text mt-1">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. This is a wider card with supporting text below as a natural lead-in to additional content. text below as a natural lead-in to additional.</p>
                    <p class="card-text mt-1">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. This is a wider card with supporting text below as a natural lead-in to additional content. text below as a natural lead-in to additional. This content is a little bit longer. This is a wider card with supporting text below as a natural lead-in to additional content. This is a wider.</p>
                    <p class="card-text mt-1">Mehadi Hasan, <span>Software Developer</span></p>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default AboutUs;
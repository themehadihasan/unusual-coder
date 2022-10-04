import React from "react";
import HeroSectionAll from "./HeroSectionAll";
import "../aboutus/AboutUs.css";

function AboutUs() {

    return (
        <div className="container-lg">
            <HeroSectionAll heading="About Us" description="Some quick example text to build on the card title and make up the bulk of the card's content."/>
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
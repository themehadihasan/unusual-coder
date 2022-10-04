import React from "react";
import HeroBlogImg02 from '../images/hero-blog-img-02.png';
import "../aboutus/AboutUs.css";


function HeroSectionAll(props) {
    return (
        <>
            <div className="row mb-5">
                <div className="aboutImage">
                    <img src={HeroBlogImg02} alt="heroBlog" />
                </div>
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">{props.heading}</h4>
                        <p class="card-text">{props.description}</p>
                    </div>
                </div>
            </div>
            <hr />
        </>
    )
}

export default HeroSectionAll;
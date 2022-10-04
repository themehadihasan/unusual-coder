import React from "react";
import HeroSectionAll from "../aboutus/HeroSectionAll";
import '../videos/Videos.css'

function Videos() {

    return (
        <div className="container-lg">
            <HeroSectionAll heading="Videos" description="Some quick example text to build on the card title and make up the bulk of the card's content."/>
            <div className="row text-center">
                <div class="card-body">
                    <h4 class="card-title mt-1">We're coming soon with the helpful videos for you</h4>
                    <p class="card-text mt-1">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. This is a wider card with supporting text below as a natural lead-in to additional content. text below as a natural lead-in to additional.</p>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default Videos;
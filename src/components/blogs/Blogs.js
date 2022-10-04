import React from "react";
import BlogCards from "./blogCards/BlogCards";
import HeroSectionAll from "../aboutus/HeroSectionAll";
import '../blogs/Blogs.css'

function Blogs() {

    return (
        <div className="container-lg">
            <HeroSectionAll heading="Blogs" description="Some quick example text to build on the card title and make up the bulk of the card's content."/>
            <BlogCards />
            <hr />
        </div>
    )
}

export default Blogs;
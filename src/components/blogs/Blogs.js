import React from "react";
import BlogCards from "./blogCards/BlogCards";
import HeroBlogImg02 from '../images/hero-blog-img-02.png';
import '../blogs/Blogs.css'

function Blogs() {

    return (
        <div className="container-lg">
            <div className="row mb-5">
                <div className="blogPageImage">
                    <img src={HeroBlogImg02} alt="heroBlog" />
                </div>
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">Blogs</h4>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
            <hr />
            <BlogCards />
            <hr />
        </div>
    )
}

export default Blogs;
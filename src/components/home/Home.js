import React from "react";
import './Home.css';
import HeroBlogImg from '../images/hero-blog-img.png';
import BlogCards from '../blogs/blogCards/BlogCards';

function Home() {
//I'm here to solve your problems
    return (
        <div className="container-lg">
        {/*hero section*/}
            <div className="row mb-5">
                <div className="image">
                    <img src={HeroBlogImg} alt="heroBlog" />
                </div>
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">I'm here to listen, understand and solve your problems</h4>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#link" class="card-link">Know More</a>
                    </div>
                </div>
            </div>
            <hr />
            {/*blogs*/}
            <BlogCards />
            <hr />
        </div>
    );
}

export default Home;
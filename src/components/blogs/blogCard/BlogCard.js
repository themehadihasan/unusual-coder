import React from "react";
import '../blogCard/BlogCard.css';
import { Link } from "react-router-dom";

function BlogCard(props) {

    return (
        <>
            <div class="card mt-2">
                <img src={props.image} className="card-img-top" alt="blogImage" />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}<Link className="link ms-2" to={props.link}>More...</Link></p>
                    <div className="author">
                        <div className="authorImage">
                            <img className="authorPicture" src="https://wallpapercave.com/wp/wp2234604.jpg" alt="authorImage" />
                        </div>
                        <div className="authorText ms-3">
                            <p className="name mt-3">Mehadi Hasan</p>
                            <span className="post">Software Developer</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogCard;
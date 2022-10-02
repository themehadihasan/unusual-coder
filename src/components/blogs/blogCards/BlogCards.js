import React from "react";
import BlogCard from "../blogCard/BlogCard";
import BlogData from "../blogData/BlogData";
import '../blogCards/BlogCards.css';

function BlogCards() {

    function data(val) {

        return (
            <BlogCard 
            image = {val.image}
            title = {val.title}
            description = {val.description}
            link = {val.link}
        />
        )
    }

    return (
        <div className="row">
            {BlogData.map(data)}
        </div>
    )
}

export default BlogCards;
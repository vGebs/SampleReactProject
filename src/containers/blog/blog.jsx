import React from 'react';
import './blog.css'
import { Article } from '../../components';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';

const Blog = () => {
    return (
        <div className="gpt3__blog section__padding" id="blog">
            <div className="gpt3__blog-heading">
                <h1 className="gradient__text">A lot happening, we're all blogging about it!</h1>
            </div>
            <div className="gpt3__blog-container">
                <div className="gpt3__blog-container_groupA">
                    <Article imgUrl={blog01} title="This is the first title" date="Febuary 9, 2023"/>
                </div>
                <div className="gpt3__blog-container_groupB">
                    <Article imgUrl={blog02} title="This is a title" date="Febuary 9, 2023"/>
                    <Article imgUrl={blog03} title="This is another title" date="Febuary 9, 2023"/>
                    <Article imgUrl={blog04} title="This is yet another title" date="Febuary 9, 2023"/>
                    <Article imgUrl={blog05} title="Guess what! This is another title" date="Febuary 9, 2023"/>
                </div>
            </div>
        </div>
    )
};

export default Blog;
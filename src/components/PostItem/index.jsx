import React from 'react';
import './PostItem.scss'

function PostItem({ title, createdAt, _id }) {
    return (
        <div className="post-item">
            <a href={`/posts/${_id}`}>
                <h2>{title}</h2>
            </a>
            <p>
                <i>Posted on {createdAt}</i>
                <a href="#">Remove</a>
                <a href="#">Edit</a>
            </p>
        </div>
    )
}

export default PostItem

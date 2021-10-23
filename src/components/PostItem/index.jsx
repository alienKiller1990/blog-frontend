import React from 'react';
import { Link } from 'react-router-dom';
import './PostItem.scss';

function PostItem({ title, createdAt, _id, onRemove }) {
    return (
        <div className="post-item">
            <Link to={`/posts/${_id}`}>
                <h2>{title}</h2>
            </Link>
            <p>
                <i>Posted on {createdAt}</i>
                <a href="javascript://" onClick={onRemove}>Remove</a>
                <Link to={`/posts/${_id}/edit`}>Edit</Link>
            </p>
        </div>
    )
}

export default PostItem

import React from 'react';
import { Link } from 'react-router-dom';

import './FullPost.scss'

function FullPost({ text, createdAt }) {
    return (
        <div className="full-post">
            <div className="container">
                <Link to="/">
                    <button type="button" className="btn btn-primary">Back</button>
                </Link>

                <div className="full-post__details">
                    <i>Posted on {createdAt}</i>
                </div>
                <br />
                <p className="full-post__text">
                    {text}
                </p>
            </div>
        </div>
    )
}

export default FullPost

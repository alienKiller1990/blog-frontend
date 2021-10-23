import React from 'react';
import { Link } from 'react-router-dom';

import './FullPost.scss'

function FullPost({ createdAt }) {
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
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus soluta dignissimos, tempora quia illo dolorem itaque nesciunt autem earum sed nulla vel adipisci rem totam. Nobis animi ab pariatur aliquid?
                </p>
            </div>
        </div>
    )
}

export default FullPost

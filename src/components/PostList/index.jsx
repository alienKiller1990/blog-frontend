import React from 'react';
import { PostItem } from '..';

function PostList({ posts }) {
    return (
        <div className="post-items">
            {
                posts.map(post => (
                    <PostItem {...post}/>
                ))
            }

        </div>

    )
}

export default PostList

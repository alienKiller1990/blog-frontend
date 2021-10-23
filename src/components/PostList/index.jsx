import React from 'react';
import { PostItem } from '..';

function PostList({ items }) {
    return (
        <div className="post-items">
            {
                items ? items.map(post => <PostItem {...post}/>) : 'Loading...'
            }

        </div>

    )
}

export default PostList

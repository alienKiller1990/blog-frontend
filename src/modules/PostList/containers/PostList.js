import React, { Component } from 'react'
import { connect } from "react-redux";
import { PostList } from "../../../components";
import PostListActions from "../actions"

class PostListContainer extends Component {

    componentWillMount() {
        const { fetchItems } = this.props;
        fetchItems()
    }

    render() {
        const { fetchRemoveItem } = this.props
        return <PostList items={this.props.items} onRemove={fetchRemoveItem} />
    }
}

export default connect(({ posts }) => posts, PostListActions)(PostListContainer)
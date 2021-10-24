import { postApi } from '../../utils/api'

const PostListActions = {
    setItems: (items) => ({
        type: 'POSTS_SET_ITEMS',
        payload: items
    }),
    appendItem: (item) => ({
        type: 'POSTS_APPEND_ITEM',
        payload: item
    }),
    fetchItems: () => dispatch => {
        postApi.get().then(({ data }) => {
            dispatch(PostListActions.setItems(data))
        })
    },
    fetchItem: (id) => dispatch => {
        postApi.get(id).then(({ data }) => {
            dispatch(PostListActions.appendItem(data))
        })
    }
}

export default PostListActions
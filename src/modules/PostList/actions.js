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
    removeItem: (id) => ({
        type: 'POSTS_REMOVE_ITEM',
        payload: id
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
    },
    fetchRemoveItem: (id) => dispatch => {
        if (window.confirm('Вы действительно хотите удалить статью?')){
            dispatch(PostListActions.removeItem(id));
            postApi.remove(id)
        }
    }
}

export default PostListActions
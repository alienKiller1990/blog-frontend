import { postApi } from '../../utils/api'

const PostListActions = {
    setItems: (items) => ({
        type: 'POSTS_SET_ITEMS',
        payload: items
    }),
    fetchItems: () => dispatch => {
        postApi.get().then(({ data }) => {
            dispatch(PostListActions.setItems(data))
        })
    }
}

export default PostListActions
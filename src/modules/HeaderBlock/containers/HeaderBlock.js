import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { HeaderBlock } from '../../../components';



const mapStateToProps = ({ posts }, { location: { pathname } }) => {
    const postId = pathname.split('/posts/')[1]
    return !posts.items ? {} : posts.items.filter(post => post._id === postId)[0]
};


HeaderBlock.defaultProps = {
    title: 'Заголовок сайта',
    description: 'Описание',
    imageUrl: "https://www.atlasandboots.com/wp-content/uploads/2019/05/ama-dablam2-most-beautiful-mountains-in-the-world.jpg"
}

export default withRouter(
    connect(
        mapStateToProps,
    )(HeaderBlock)
)
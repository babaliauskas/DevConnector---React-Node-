import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getPost } from '../../actions/postActions';
import PostForm from './PostForm';
import Spinner from '../common/Spinner';
import PostFeed from './PostFeed';

class Post extends Component {
  componentDidMount = () => {
    this.props.getPost();
  };

  render() {
    const { posts, loading } = this.props.post;

    let postContent;

    if (posts === null || loading) {
      postContent = <Spinner />;
    } else {
      postContent = <PostFeed posts={posts} />;
    }

    return (
      <div className="feed">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <PostForm />
              {postContent}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
  getPost: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  post: state.posts
});

export default connect(
  mapStateToProps,
  { getPost }
)(Post);

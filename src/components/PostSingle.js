import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { increment } from '../actions/posts'

const PostSingle = ({ pathname, posts, increment }) => {
    const slug = pathname.replace('/blog/', '');
        // index of the post
    const index = posts.findIndex((post) => post.slug === slug)
    const post = posts[index];

    return (
        <article>
            <h1>{post.title}</h1>
            <p>
                <button onClick={ () => increment(index)}>❤️</button> {post.likes} likes
            </p>
            {post.body}
        </article>
    )
}

PostSingle.propTypes = {
    post: PropTypes.object,
    posts: PropTypes.array,
    pathname: PropTypes.string,
}

const mapStateToProps = state => ({
    pathname: state.router.location.pathname,
    posts: state.posts,
})

const mapDispatchToProps = (dispatch) => ({
    increment: (index) => dispatch(increment(index)),
})

export default connect(mapStateToProps, mapDispatchToProps)(PostSingle)

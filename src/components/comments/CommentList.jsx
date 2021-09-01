import React from 'react'
import CommentSummary from './CommentSummary'
import { Link } from 'react-router-dom'

const CommentList = ({comments}) => {
    return(
    <div className="comment-list section">
        { comments && comments.map(comment => {
            return (
                <Link to={'/comment/' + comment.id} key={comment.id}>
                <CommentSummary comment={comment} />
                </Link>
            )
        })}
    </div>
    )
}

export default CommentList;
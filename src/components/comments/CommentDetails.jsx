import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import moment from 'moment'

const commentDetails = (props) => {

    const { comment, auth } = props;
   
    if (!auth.uid) return <Redirect to='/login'/>
    if (comment) {

        return(

        <div className="container section comment-details">
        <div className="card z-depth-0 comment-details">
            <div className="card-content">
                <span className="card-title">{comment.title}</span>
                <p>{ comment.content }</p>
            
            </div>
            <div className="card-action grey lighten-4 grey-text">
                <div>Posted by {comment.authorFirstName} {comment.authorLastName}</div>
                <div>{moment(comment.createdAt.toDate()).calendar()}</div>
            </div>
        </div>

    </div>
        )

    } else {
        return(
            <div className="container center" style={{textColor: "white"}}>
                <p>Loading comment...</p>
            </div>
        )
    }
        

    
}

const mapStateToProps = (state, ownProps) => {
    console.log(state);
    const id = ownProps.match.params.id;
    const comments = state.firestore.data.comments;
    const comment = comments ? comments[id] : null
    return{
        comment: comment,
        auth: state.firebase.auth

    }
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect([{
        collection: 'comments'
    }])
)(commentDetails);
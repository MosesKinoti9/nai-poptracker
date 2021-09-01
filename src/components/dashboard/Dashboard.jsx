import React, { Component } from 'react'
import Notifications from './Notifications'
import CommentList from '../comments/CommentList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

class Dashboard extends Component {

    render(){
        //console.log(this.props);
        const { comments, auth, notifications } = this.props;
        if (!auth.uid) return <Redirect to='/login'/>
        return(
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <CommentList comments={comments}/>
                    </div>
                    <div className="col s12 m5 offset-m1">
                    <Notifications notifications={notifications}/>
                    </div>
                  
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return{
        comments: state.firestore.ordered.comments,
        auth: state.firebase.auth,
        notifications: state.firestore.ordered.notifications
    }
}

export default compose(
    connect(mapStateToProps),firestoreConnect([
        {collection: 'comments', orderBy: ['createdAt', 'desc']},
        {collection: 'notifications', limit: 3, orderBy: ['time', 'desc']}

    ])
)(Dashboard);
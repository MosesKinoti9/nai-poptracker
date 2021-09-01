import React, { Component } from "react"
import { connect } from 'react-redux'
import { createComment } from '../../store/actions/commentActions'
import { Redirect } from 'react-router-dom'

class CreateComment extends Component {
    state = {
        title: '',
        content: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
       // console.log(this.state);
       this.props.createComment(this.state);
       this.props.history.push('/');
    }
    render() {
        const { auth } = this.props;
        if (!auth.uid) return <Redirect to='/login'/>
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white" style={{padding: 20, marginTop: 30}}>
                    <h5 className="grey-text text-darken-3">Create New Comment</h5>
                    <br></br>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" onChange={this.handleChange} />
                    </div>
                    <br></br>
                    <div className="input-field">
                        <label htmlFor="content">Project Content</label>
                        <textarea id="content" className="materialize-textarea" onChange={this.handleChange} />
                    </div>
                    
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Create</button>
                    </div>
                </form>
            </div>
        )

    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createComment: (comment) => dispatch(createComment(comment))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateComment);

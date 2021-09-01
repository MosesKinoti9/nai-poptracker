import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'


const NavBar = (props) =>
{
    const { auth, profile } = props;
    const link = auth.uid ? <SignedInLinks profile={profile}/> : <SignedOutLinks/>;
    return(
        <nav className="nav-wrapper teal darken-2">
            <div className="container">
           
            <Link to='/' className="brand" style={{fontSize: 25, fontFamily: 'Rampart One'}}>NAIPOPTRACKER</Link>
            
                {link}

            </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return{
        auth: state.firebase.auth,
        profile: state.firebase.profile

    }
}

export default connect(mapStateToProps)(NavBar);
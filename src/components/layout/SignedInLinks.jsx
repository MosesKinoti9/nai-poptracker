import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'




const SignedInLinks = (props) =>
{
    return(
      
      <ul className="right">
          <li><NavLink to='/create'>Comment</NavLink></li>
          <li><NavLink to='/map'>Map</NavLink></li>
          <li><NavLink to='/stats'>Stats</NavLink></li>
          <li><NavLink to='/'><a onClick={props.signOut}>Log Out</a></NavLink></li>
          <li><a href="#" data-target="dropdown" className='btn btn-floating pink lighten-1 dropdown-trigger'>{props.profile.initials}</a>
           <ul class="dropdown-content" id="dropdown">
             <li><a onClick={props.signOut}>Log Out</a></li>
           </ul>
          </li>
      </ul>

     

     
    
    )
}



 
  



const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks);
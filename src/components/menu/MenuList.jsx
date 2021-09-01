import React from 'react'

const MenuList = () => {

    return(
    <div className="menu-list section">
        <a class='dropdown-trigger' href='#' data-target='dropdown'>Menu</a>
        <ul id='dropdown' class='dropdown-content'>
            <li><a href='#'>Comments</a></li>
            <li><a href='#'>Profile</a></li>
            <li><a href='#'>Statistics</a></li>
            <li><a href='#'>Map</a></li>

        </ul>
       
    </div>
    )
}

export default MenuList;
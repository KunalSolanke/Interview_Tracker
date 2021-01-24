import React from 'react'
import './sidebar.css'
import {NavLink} from 'react-router-dom'

function Sidebar() {
    return (
        <div className="sidebar">
            <div class="content">
                <NavLink to="#" activeClassName>
                    <div className="value">
                        Profile
                    </div>
                </NavLink>
                <NavLink to="#"  activeClassName>
                    <div className="value">
                        My Interviews
                    </div>
                </NavLink>
                <NavLink to="#"  activeClassName>
                    <div className="value">
                        Add Interviews
                    </div>
                </NavLink>
                <NavLink to="#" activeClassName>
                    <div className="value">
                        Starred
                    </div>
                </NavLink>
                <NavLink to="#"  activeClassName>
                    <div className="value">
                        My Questions
                    </div>
                </NavLink>
                <NavLink to="#" activeClassName>
                    <div className="value">
                        Add Questions
                    </div>
                </NavLink>
            </div>
        </div>
    )
}

export default Sidebar

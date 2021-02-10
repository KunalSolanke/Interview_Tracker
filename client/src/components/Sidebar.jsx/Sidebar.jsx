import React from 'react'
import './sidebar.css'
import {NavLink} from 'react-router-dom'

function Sidebar() {
    return (
        <div className="sidebar">
            <div class="content">
                <NavLink to="/profile" activeClassName>
                    <div className="value">
                        Profile
                    </div>
                </NavLink>
                <NavLink to="/profile/myInterviews"  activeClassName>
                    <div className="value">
                        My Interviews
                    </div>
                </NavLink>
                <NavLink to="/profile/interviews/create"  activeClassName>
                    <div className="value">
                        Add Interviews
                    </div>
                </NavLink>
                <NavLink to="/profile/starred" activeClassName>
                    <div className="value">
                        Starred
                    </div>
                </NavLink>
                <NavLink to="/profile/myQuestions"  activeClassName>
                    <div className="value">
                        My Questions
                    </div>
                </NavLink>
                <NavLink to="/profile/questions/create" activeClassName>
                    <div className="value">
                        Add Questions
                    </div>
                </NavLink>
            </div>
        </div>
    )
}

export default Sidebar

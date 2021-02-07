import React from 'react'
import './Comment.css'

function Comment({comment}) {
    console.log(comment.description)
    return (
        <div className="single-comment">
            <img className="profile cmt" src={comment.user.image?.contentType} alt="No iamge"/>
            <div>
                <p className="cmt-name">{comment.user.first_name||comment.user.username}</p>
                <h3>{comment.description}</h3>
            </div>
        </div>
    )
}

export default Comment

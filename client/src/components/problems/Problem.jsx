import React from 'react';
import './style.css';

export default function Problem( {title, level, topics, maxScore, description, buttonContent} ) {
    return (
        <>
            <div className="card">
                <div className="top-container">
                    <h4 className="top-head">{ title }</h4>
                        <p>
                            <span className="lvl">{ level }</span>,
                            <span>{ 
                                topics.map((topic) => {
                                    <span key={topic}> {topic}, </span>
                                })
                            }
                            </span>
                            <span> { maxScore }</span>
                        </p>
                </div>
                <div className="flex-container">
                    <div className="left-item">{ description }</div>
                    <div>
                        <button className="btn" type="button">{ buttonContent }</button>
                    </div>
                </div>
            </div>
        </>
    )
}

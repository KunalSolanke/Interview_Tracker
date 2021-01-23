import React from 'react';
import './Button.css';

export default function Button( {data}) {
    return (
        <>
            <div>
                <button class="btn" type="button">{ data }</button>
            </div>
            
        </>
    )
}

import React from 'react'

export default function Button(props) {
    return (
        <>
            <button class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" type="submit">{props.data}</button>
        </>
    )
}

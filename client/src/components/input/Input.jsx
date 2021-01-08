import React from 'react'
export default function Input(props) {
    const data = props.data
    return (
        <>
            <div class="relative mb-4">
                        <label for={`${props.data}`} class="leading-7 text-sm text-gray-600">{data[0].toUpperCase() + data.substring(1)}</label>
                        <input type={`${props.data}`} id={`${props.data}`} name={`${props.data}`}
                            class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
        </>
    )
}

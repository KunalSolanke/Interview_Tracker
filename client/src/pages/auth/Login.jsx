import React from 'react'
import But from '../../components/button/Button'
import Inp from '../../components/input/Input'

export default function Auth() {
    return (
        <>
            <div class="container  h-screen mx-auto flex justify-center align-center mt-8">

                <form method ="post" action="/accounts/login" class="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col  w-full mt-10 md:mt-0 relative z-10">
                    <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">Login</h2>
                    <p class="leading-relaxed mb-5 text-gray-600">Login to your Account</p>
                    <Inp data="email"/>
                    <Inp data="password"/>
                    <But data="Login"/>

                </form>
            </div>
        </>
        )
}

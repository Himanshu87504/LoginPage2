import React from 'react'

const Header = () => {
    return (
        <header className="flex justify-between items-center px-4 sm:px-8 md:px-16 py-4 bg-white/70 backdrop-blur-sm">
            <div className="text-2xl font-bold text-pink-600">💍 Made4Ever</div>
            <nav className="flex space-x-3 sm:space-x-4 text-gray-700 font-medium text-xs sm:text-sm md:text-base">
                <a href="#">Home</a>
                <a href="#">Register</a>
                <a href="#">MSP/ Marriage Bureau Login</a>
                <a href="#">Plans</a>
                <a href="#">Gallery</a>
                <a href="#">Contact us</a>
            </nav>
        </header>
    )
}

export default Header
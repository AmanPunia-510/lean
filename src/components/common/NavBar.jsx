import React, { useState } from 'react'
import pageLogo from '../../assets/images/png/page-logo.png'
import Icons from '../common/Icons'

const NavBar = () => {
    const [navState, setNavState] = useState(false);
    const handleClick = () => {
        setNavState(!navState)
    }
    return (
        <div className='container bg-black py-4 flex items-center justify-between'>
            <div className='w-[136px] h-14'>
                <a href="#">
                    <img src={pageLogo} alt="pageLogo" />
                </a>
            </div>
            <div className='flex flex-col gap-2 items-center w-9 relative z-50 lg:hidden' onClick={handleClick}>
                <span className='w-full pt-px bg-white'></span>
                <span className='w-full pt-px bg-white'></span>
                <span className='w-full pt-px bg-white'></span>
            </div>
            <ul className={`flex items-center gap-6 max-lg:fixed max-lg:top-0 max-lg:bg-black max-lg:min-h-screen max-lg:w-full max-lg:flex-col max-lg:justify-center transition-all z-40 ${navState ? "left-0" : "-left-[100%]"}`}>
                <li><a href="#" className='text-white'>Home</a></li>
                <li><a href="#" className='text-white flex items-center gap-[6.25px]'><span>About Us</span><Icons icons="arrow" /></a></li>
                <li><a href="#" className='text-white flex items-center gap-[6.25px]'><span>Attorneys</span><Icons icons="arrow" /></a></li>
                <li><a href="#" className='text-white flex items-center gap-[6.25px]'><span>Practice Areas</span><Icons icons="arrow" /></a></li>
                <li><a href="#" className='text-white'>Results</a></li>
                <li><a href="#" className='text-white flex items-center gap-[6.25px]'><span>Media</span><Icons icons="arrow" /></a></li>
                <li><a href="#" className='text-white'>Contact</a></li>
            </ul>
        </div>
    )
}

export default NavBar
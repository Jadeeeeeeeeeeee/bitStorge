import { useState } from 'react';
import Logo from '../assets/Icon.png'
import { Link, useLocation } from 'react-router-dom';


function SideBar() {
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    return(<>
    <div className='w-full h-3/20 flex items-center'>
    <img src={Logo} className='sm:ml-5 sm:h-20 lg:h-20 3xl:w-32 3xl:h-32 md:h-20 size-14 sm:w-20 lg:w-20 md:w-20 ml-2sm:ml-10 lg:ml-10 md:ml-10 shrink-0 grow-0 userDrag hover:cursor-pointer'/>
        <div className='w-fit flex flex-row justify-start gap-x-10 sm:gap-x-40 lg:gap-x-40 md:gap-x-40 text-white'>
        <Link  to="/" className={`ml-7 verysm:ml-4 sm:ml-8 md:ml-14 lg:ml-20 sm:text-15/10 lg:text-20/10 md:text-15/10 text-10/10 underline-offset-8	 ${isActive('/') ? 'underline' : 'no-underline'}`}>Home</Link>
        <Link  to="/Pricing" className={`ml-7 verysm:ml-4 sm:ml-8 md:ml-14 lg:ml-20 sm:text-15/10 lg:text-20/10 md:text-15/10 text-10/10 underline-offset-8	 ${isActive('/Pricing') ? 'underline' : 'no-underline'}`}>Pricing</Link>
        <Link  to="/OtherProducts" className={`ml-7 verysm:ml-4 sm:ml-8 md:ml-14 lg:ml-20 sm:text-15/10 lg:text-20/10 md:text-15/10 text-10/10 underline-offset-8	 ${isActive('/OtherProducts') ? 'underline' : 'no-underline'}`}>Other Products</Link>
        </div>
    </div>
    </>);
}

export default SideBar
import { useState, useEffect } from 'react';
import Logo from '../assets/Icon.png'
import { Link, useLocation } from 'react-router-dom';
import { FiMenu } from "react-icons/fi";
import { MdOutlineCancel } from "react-icons/md";


function SideBar() {
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
      };

      function Refresh() {
        setIsOpen(!isOpen);
      }
    
      useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'auto';
        // Clean up function to reset overflow when component unmounts
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    return(<>
    <div className='w-full h-3/20 flex items-center '>
        <div className='h-full w-fit flex flex-row gap-x-4 items-center'>
        <FiMenu onClick={toggleSidebar}  className=' ml-4 block midSm:hidden lg:h-20 3xl:w-32 3xl:h-32 md:h-20 size-14 sm:w-20 lg:w-20 md:w-20 ml-2sm:ml-10 lg:ml-10 md:ml-10 shrink-0 grow-0 userDrag hover:cursor-pointer'/>
        <img  src={Logo} className='ml-5 lg:h-20 3xl:w-32 3xl:h-32 md:h-20 size-18 sm:w-20 lg:w-20 md:w-20 ml-2sm:ml-10 lg:ml-10 md:ml-10 shrink-0 grow-0 userDrag hover:cursor-pointer'/>
        </div>
        <div className='hidden verysm:hidden midSm:block  w-fit flex flex-row justify-start gap-x-40 sm:gap-x-40 verysm:gap-x-40 lg:gap-x-40 md:gap-x-40 text-white'>
        <Link  to="/" className={`ml-7 verysm:ml-4 sm:ml-16 md:ml-14 lg:ml-20 sm:text-15/10 lg:text-20/10 md:text-15/10 text-10/10 underline-offset-8	 ${isActive('/') ? 'underline' : 'no-underline'}`}>Home</Link>
        <Link  to="/Pricing" className={`ml-7 verysm:ml-4 sm:ml-32 md:ml-14 lg:ml-20 sm:text-15/10 lg:text-20/10 md:text-15/10 text-10/10 underline-offset-8	 ${isActive('/Pricing') ? 'underline' : 'no-underline'}`}>Pricing</Link>
        <Link  to="/OtherProducts" className={`ml-7 verysm:ml-4 sm:ml-32 md:ml-14 lg:ml-20 sm:text-15/10 lg:text-20/10 md:text-15/10 text-10/10 underline-offset-8	 ${isActive('/OtherProducts') ? 'underline' : 'no-underline'}`}>Other Products</Link>
        </div>
        <div className={`fixed h-screen w-8/10 inset-0 z-50 bg-blue-950 transition-all duration-500 flex flex-col ${isOpen ? '-inset-x-10/10' : 'inset-x-0'}`}>
         <div className='w-full h-3/20 flex flex-row items-center justify-between'>
            <img  src={Logo} className='ml-3 lg:h-20 3xl:w-32 3xl:h-32 md:h-20 size-16 sm:w-20 lg:w-20 md:w-20 ml-2sm:ml-10 lg:ml-10 md:ml-10 shrink-0 grow-0 userDrag hover:cursor-pointer'/>
            <MdOutlineCancel onClick={toggleSidebar} className='mr-1 text-red-600 block midSm:hidden lg:h-20 3xl:w-32 3xl:h-32 md:h-20 size-18 sm:w-20 lg:w-20 md:w-20 ml-2sm:ml-10 lg:ml-10 md:ml-10 shrink-0 grow-0 userDrag hover:cursor-pointer '/>
          </div>
          <div className='h-fit w-full flex flex-col text-white gap-y-10'>
            <Link onClick={Refresh}  to="/" className={`mt-10 ml-7 verysm:ml-4 sm:ml-16 md:ml-14 lg:ml-20 sm:text-20/10 lg:text-20/10 md:text-25/10 text-15/10 underline-offset-8	 ${isActive('/') ? 'underline' : 'no-underline'}`}>Home</Link>
            <Link onClick={Refresh} to="/Pricing" className={`ml-7 verysm:ml-4 sm:ml-32 md:ml-14 lg:ml-20 sm:text-20/10 lg:text-20/10 md:text-25/10 text-15/10 underline-offset-8	 ${isActive('/Pricing') ? 'underline' : 'no-underline'}`}>Pricing</Link>
            <Link onClick={Refresh} to="/OtherProducts" className={`ml-7 verysm:ml-4 sm:ml-32 md:ml-14 lg:ml-20 sm:text-20/10 lg:text-20/10 md:text-25/10 text-15/10 underline-offset-8	 ${isActive('/OtherProducts') ? 'underline' : 'no-underline'}`}>Other Products</Link>
          </div>
        </div>
    </div>  
    </>);
}

export default SideBar
import Logo from '../assets/Icon.png'
import { Link } from 'react-router-dom';

function SideBar() {
    return(<>
    <div className='w-full h-3/20 flex items-center'>
    <img src={Logo} className='sm:ml-5 sm:h-20 lg:h-20 2xl:w-32 2xl:h-32 md:h-20 size-14 sm:w-20 lg:w-20 md:w-20 ml-2sm:ml-10 lg:ml-10 md:ml-10 shrink-0 grow-0'/>
        <div className='w-fit flex flex-row justify-start gap-x-10 sm:gap-x-40 lg:gap-x-40 md:gap-x-40 text-white'>
        <Link to="/" className='ml-7 verysm:ml-4 sm:ml-8 md:ml-14 lg:ml-20 sm:text-15/10 lg:text-20/10  md:text-15/10 text-10/10'>Home</Link>
        <Link to="/Pricing" className='ml-7 verysm:ml-4 sm:ml-8 md:ml-14 lg:ml-20 sm:text-15/10 lg:text-20/10  md:text-15/10 text-10/10'>Pricing</Link>
        <Link to="/OtherProducts" className='ml-7 verysm:ml-4 sm:ml-8 md:ml-14 lg:ml-20 sm:text-15/10 lg:text-20/10  md:text-15/10 text-10/10'>Other Products</Link>
        </div>
    </div>
    </>);
}

export default SideBar
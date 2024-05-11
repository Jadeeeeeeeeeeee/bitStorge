import Logo from '../assets/Icon.png'

function SideBar() {
    return(<>
    <div className='w-full h-3/20 flex items-center'>
    <img src={Logo} className='sm:ml-5 sm:h-20 md:h-20 size-14 sm:w-20 md:w-20 ml-2sm:ml-10 md:ml-10 shrink-0 grow-0'/>
        <div className='w-fit flex flex-row justify-start gap-x-10 sm:gap-x-40 md:gap-x-40 text-white'>
            <button className='ml-7 verysm:ml-4 sm:ml-14 md:ml-14 lg:ml-28 sm:text-15/10  md:text-15/10 text-10/10'>Home</button>
            <button className='sm:text-15/10 md:text-15/10 text-10/10'>Pricing</button>
            <button className='sm:text-15/10 md:text-15/10 text-10/10'>Products</button>
        </div>
    </div>
    </>);
}

export default SideBar
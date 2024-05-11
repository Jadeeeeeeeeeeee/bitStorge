import Ilu from '../assets/Ilustration.png'

function Home() {
    return(<>
    <div className="h-17/20 w-screen absolute flex md:flex-row flex-col justify-center items-center">
          <div className="md:w-6/10 w-10/10 flex flex-col gap-y-2 md:gap-y-5 md:mb-40 items-center mt-60 verysm:mt-96 md:mt-40 z-10">
            <h1 className="md:text-25/10 text-15/10 md:w-8/10 w-7/10 mt-20" >
                <span className="text-white">Host </span>
                <span className="font-bold underline text-red-600">YOUR </span>
                <span className="text-white">servers on bitstorge for fast request and access</span>
            </h1>
            <p className="text-white md:text-15/10 w-7/10 md:w-8/10 ">our servers are designed for afordability and easy access for beginners and intermediateslook at our pricing and pick the plan that fits youand check our well explained documentation</p>
            <img src={Ilu} className='md:hidden visible h-1/2 z-0 md:h-7/10 md:mb-20 mb-20'/>
            <a href="" className='mt-20 h-2/10 w-1/2 md:h-1/10 md:w-3/10 lg:w-2/10 lg:text-20/10 bg-DocsPink text-center flex justify-center items-center mb-14 pb-5 pt-5 rounded-full text-white text-15/10'>docs</a>
          </div>
          <img src={Ilu} className="hidden md:block h-1/2 z-0 md:h-7/10 mb-20" />
    </div>
    </>);
}

export default Home
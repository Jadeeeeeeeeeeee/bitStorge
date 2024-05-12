
function PricingCard(props) {
    return(<>
    <div className="bg-white md:w-1/5 sm:w-3/10 w-5/10 md:h-8/10 rounded-4xl flex flex-col justify-center items-center">
        <h1 className="w-10/10 h-3/20  text-center flex items-center justify-center md:text-20/10 p-2 md:p-0 lg:text-30/10">{props.plan}</h1>
        <div className="h-0.10 bg-black w-full"></div>
        <div className=" w-full h-6/10 flex flex-col items-center mb-10">
            <p className="w-9/10 h-fit text-10/10 md:text-15/10 leading-normal  mt-5"> {props.desc}</p>
            <p className="w-9/10 h-fit text-10/10 md:text-15/10 leading-normal "> {props.desc2}</p>
            <p className="w-9/10 h-fit text-10/10 md:text-15/10 leading-normal "> {props.desc3}</p>
            <p className="w-9/10 h-fit text-10/10 md:text-15/10 leading-normal "> {props.desc5}</p>
            <p className="w-9/10 h-fit text-10/10 md:text-15/10 leading-normal "> {props.desc4}</p>
        </div>
        <h3 className="w-full h-1/10 flex justify-center items-center text-10/10 md:text-15/10">{props.price}</h3>
        <button className="w-6/10 h-3/20 md:h-2/10 rounded-4xl bg-buyButton text-white text-10/10 md:text-15/10 mb-3 md:mb-4 lg:text-20/10">Buy</button>
    </div>
    </>);
}

export default PricingCard
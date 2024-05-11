
function Products(props) {
    return(<>
    <div className="bg-gray-900 w-1/2 md:w-3/20 h-4/10 rounded-4xl md:ml-20 flex items-center justify-center flex-col mt-8 lg:w-2/10 lg:h-5/10">
        <h1 className="w-full text-white h-2/10 flex justify-center items-center text-15/10  md:text-20/10">{props.title}</h1>
        <p className="w-8/10 h-2/10 text-white text-10/10 md:text-15/10 flex justify-center items-center mt-5">{props.desc}</p>
        <div className="w-full h-6/20"></div>
        <button className="bg-gray-500 w-1/2 h-3/20 text-10/10 md:text-15/10 text-white rounded-4xl">Start</button>
    </div>
    </>);
}

export default Products
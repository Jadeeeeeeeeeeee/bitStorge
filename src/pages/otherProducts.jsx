import Products from "../componenets/product";

function OtherProducts() {
    return(<>
    <div className="h-17/20 w-full flex flex-col items-center md:items-start md:flex-row">
        <Products title="api creator" desc="create powerfull apis with our online api creator"/>
        <Products title="site hosting" desc="host websites with powerful analytics and more"/>
    </div>
    </>);
}

export default OtherProducts
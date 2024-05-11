import PricingCard from "../componenets/pricingCard";

function Pricing() {
    return(<>
    <div className="h-17/20 w-screen absolute flex md:flex-row md:justify-center flex-col gap-y-10 gap-x-10 items-center">
        <PricingCard plan="Free" desc="- 30 gb of storge" desc2="- access through sql" desc3=" " desc4=" " desc5=" " price="10/m"/>
        <PricingCard plan="hobby" desc="100gb of storge" desc2="- access through sql or any backend service" desc3="- caching service" desc4=" " desc5=" " price="15$/m"/>
        <PricingCard plan="Company" desc="- Infinte gb of storge" desc2="- access through sql or any backend service" desc3="- caching service" desc4="- storge timeline" desc5="- archive & more" price="15$/m"/>
        <PricingCard plan="pay as you go" desc="- all features" desc2=" " desc3=" " desc4=" " desc5=" " price="3$ per gb"/>
    </div>
    </>);
}

export default Pricing
import PricingCard from "../componenets/pricingCard";

function Pricing() {
    return(<>
    <div className="h-17/20 w-screen absolute flex md:flex-row md:justify-center flex-col gap-y-10 gap-x-10 items-center">
        <PricingCard plan="Free" desc="- 30 gb of storge" desc2="- Access through sql" desc3=" " desc4=" " desc5=" " price="10$/m"/>
        <PricingCard plan="Hobby" desc="100gb of storge" desc2="- Access through sql or any backend service" desc3="- Caching service" desc4=" " desc5=" " price="15$/m"/>
        <PricingCard plan="Company" desc="- Infinte gb of storge" desc2="- Access through sql or any backend service" desc3="- Caching service" desc4="- Storge timeline" desc5="- archive & more" price="15$/m"/>
        <PricingCard plan="Pay as you go" desc="- All features" desc2=" " desc3=" " desc4=" " desc5=" " price="3$ per gb"/>
    </div>
    </>);
}

export default Pricing
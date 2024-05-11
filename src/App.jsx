import SideBar from "./componenets/SideBar"
import Home from "./pages/home"
import Pricing from "./pages/pricing"
import OtherProducts from "./pages/otherProducts"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {

  return (
    <>
    <Router>
       <SideBar/>
         <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Pricing" element={<Pricing/>}/>
          <Route path="/OtherProducts" element={<OtherProducts/>}/>
         </Routes>
    </Router>
    </>
  )
}

export default App

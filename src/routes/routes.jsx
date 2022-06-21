import {
    Routes,
    Route,
} from "react-router-dom";
import {Home} from "../components/Home/Home";
import {Contact} from "../components/Contact/Contact";
import {Services} from "../components/Services/Services";
import {Portfolio} from "../components/PortFolio/Portfolio";
import {About} from "../components/About/Aboute";

export  const RoutesComponent = ()=>{

    return(
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route  path="about" element={<About/>}/>
                <Route path="contact" element={<Contact/>}/>
                <Route path="services" element={<Services/>}/>
                <Route path="portfolio" element={<Portfolio/>}/>
            </Routes>
    )

}
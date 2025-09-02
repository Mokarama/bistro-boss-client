import { Outlet } from "react-router-dom";
import Navbar from "../sharde/Navbar/Navbar";
import Footer from "../sharde/Footer/Footer";



const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
          
        </div>
    );
};

export default Main;
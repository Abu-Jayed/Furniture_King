import { Outlet } from "react-router-dom";
import NavBar from "../components/Shared/NavBar";
import Footer from "../components/Shared/Footer";


const Layout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";




const Root = () => {
    return (
        <div>
            <div className="">
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;
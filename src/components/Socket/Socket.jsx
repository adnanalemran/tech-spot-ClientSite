import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

 
const Socket = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Socket;
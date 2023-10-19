import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

 
const Socket = () => {
    return (
        <div className="max-w-screen-2xl px-2 lg:px-0 mx-auto overflow-hidden">
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Socket;
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


const Home = () => {
    return (
        <div>
            <h2 style={{color:"purple"}}>Welcome to our reliable meal service!</h2>
            <p>Welcome to TheMealDB: An open, crowd-sourced database of Recipes from around the world.</p>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;
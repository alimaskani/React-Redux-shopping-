import React, { Fragment } from "react";
import { useLocation } from 'react-router-dom';


import TopNav from "../navs/TopNav";
import Header from "./Header";
import MainNav from "../navs/MainNav";
import Footer from "./Footer";
import Helmet from "react-helmet";

const MainLayout = (props) => {
    const location = useLocation();
    return (
        <>
            <Helmet>
                <title>خودآموز تاپلرن</title>
            </Helmet>
            <div className="landing-layer">
                <div className="container">
                    <TopNav />
                    {location.pathname === "/" ? <Header /> : null}
                </div>
            </div>

            <MainNav />

            <main id="home-page">
                <div className="container">{props.children} </div>
            </main>

            <Footer />
        </>
    );
};

export default MainLayout;

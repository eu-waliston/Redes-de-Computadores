import React from "react";
import "./Home.scss";
import Menu from "../components/Menu/Menu";
import backgroundVideo from './videos/back-v.mp4'

const Home = () => {
    return (
        <div className="home--component">
            <Menu />
            <video autoPlay loop muted id="video">
                <source src={backgroundVideo} type="video/mp4"/>
            </video>
        </div>
    )
}

export default Home;
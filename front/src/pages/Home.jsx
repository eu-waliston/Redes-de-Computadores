import React from "react";
import "./Home.scss";
import Menu from "../components/Menu/Menu";
import backgroundVideo from './videos/back-v.mp4'

const Home = () => {
    return (
        <div className="home--component">
            <Menu />
            <div className="greet">
                <h1>Protocolos IPV4</h1>
            </div>
            <video autoPlay loop muted id="video">
                <source src={backgroundVideo} type="video/mp4"/>
            </video>
        </div>
    )
}

export default Home;
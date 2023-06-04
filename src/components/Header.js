import { Link } from "react-router-dom";
import Video from "../pictures/video.mp4";
import React from "react";
import Menu from "./Menu";
function Header() {
    return (
        <>
            <div id="Header">
                <video src={Video} autoPlay loop muted />
                <div className="Header-center">
                <p id="napravila">Napravila: Lana Todorovski</p>
                    <h1>Slatki Snovi</h1>
                    <p>Dobrodošli u našu slastičarnu Slatki Snovi koja će vas odvesti na nevjerojatno putovanje kroz čulno iskustvo okusa i maštovite slastičarske kreacije.</p>
                    <Link to="/slastice"><button>Vidi slastice!</button></Link>
                </div>
            </div>
            <Menu/>
        </>

    );
}

export default Header;
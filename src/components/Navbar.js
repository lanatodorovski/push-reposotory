import { useState } from "react";
import FacebookLogo from "../pictures/kindpng_808522.png";
import InstagramLogo from "../pictures/NicePng_instagram-circle-logo-png_475136.png";
import { Link } from "react-router-dom";
function Navbar() {
    const [activate, setActivate] = useState("");
    const switchActivate = (hamburger) => {
        if(activate === "" && hamburger === true){
            setActivate("active");
        }else{
            setActivate("");
        }
    }
    return (<nav className={activate}>
        <div className="nav-naslov-hamburger">
            <div className="nav-naslov"><Link to="/" onClick={switchActivate}>Slatki Snovi</Link></div>
            <div className="hamburger" onClick={()=>{switchActivate(true)}}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
        </div>

        <ul className="nav-shortcuts">
            <li><Link to="/" onClick={switchActivate}>Naslovna</Link></li>
            <li><Link to="/slastice" onClick={switchActivate}>Slastice</Link></li>
            <li><Link to="/naruci" onClick={switchActivate}>Naruči</Link></li>
            <li><Link to="/lokacija" onClick={switchActivate}>Lokacija</Link></li>
            <li><Link to="/oNama" onClick={switchActivate}>O nama</Link></li>
        </ul>
        <ul className="nav-socijalne-mreze">
            <li><a href="https://www.facebook.com/graf.skolamabasadorEP/" target="_blank"><img src={FacebookLogo} alt="Facebook" /></a></li>
            <li><a href="https://www.instagram.com/gogss.ep_ambassador_school/" target="_blank"><img src={InstagramLogo} alt="Instagram" /></a></li>
        </ul>
    </nav>

    );
}
export default Navbar;
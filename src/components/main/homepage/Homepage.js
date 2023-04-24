import React from "react";
import { Link } from "react-router-dom";
import Nose from "../../../assets/nose.jpg"
import FooterImage from "../../../assets/footer.png"


const HomePage = (props) => {
    const display = `home-page ${props.display}`;
    return (
        <div className={display}>
            <img src={Nose} alt="nose" id="nose-image"></img>
            <div className="home-page-text">
                <p>The best smells, delivered straight to your... nose?</p>
                <Link to="/products"><button type="submit" id="shop-now-button">Smell Now</button></Link>
            </div>
            <img src={FooterImage} alt="wave" id="footer-image"/>
        </div>
    )
}

export default HomePage;
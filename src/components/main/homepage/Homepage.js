import React, {  } from "react";
import Nose from "../../../assets/nose.jpg"
import FooterImage from "../../../assets/footer.png"


const HomePage = () => {
    return (
        <div className="home-page">
            <img src={Nose} alt="nose" id="nose-image"></img>
            <div className="home-page-text">
                <p>The best smells, delivered straight to your... nose?</p>
                <a href="/products">
                    <button type="submit" id="shop-now-button">Smell Now</button>
                </a>
            </div>
            <img src={FooterImage} alt="wave" id="footer-image" />
        </div>
    )
}

export default HomePage;
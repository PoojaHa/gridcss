import React from "react";
import "./hero.css";
import logopng from "../../assets/slide.png";
const Hero = () => {
  return (
    <div className="section__hero">
      <div className="hero__content">
                <div className="hero__content__h1">
                <h1>Build. Manage. Succeed</h1>
                <span>with Affiliate marketing</span>
                </div>
                    <div className="hero__content__p">
                    Tell your brand's story with ambassadors' voices. Let real-time
                    tracking and powerful affiliate management software grow your Shopify
                    business.
                    </div>


                        <div className="hero__content__button">
                        <button className="btn1">Start for free</button>
                        <button className="btn2">watch a demo video</button>
                        </div>
            </div>
      <div className="hero__img">
           <img src={logopng}/>
      </div>
    </div>
  );
};

export default Hero;

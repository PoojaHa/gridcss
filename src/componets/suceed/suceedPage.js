import React from "react";
import "./sucess.css";
import step1 from "../../assets/steps1.png";
const SuceedPage = () => {
  return (
    <div className="wrapper">
      <h1>HOW TO SUCCEED?</h1>
      <div className="grid">
        <div className="sucessd-num">
        <p>1</p>
        </div>
        <div className="sucessd-img">
          <img src={step1} />
        </div>
        <div className="sucessd-content">
          <h3>BUILD YOUR TEAM</h3>
          <ul>
            <li>
              Create your own affiliate offer to attract potential affiliates.
            </li>
            <li>Invite them to your team to become brand ambassadors</li>
          </ul>
        </div>
      </div>
      <div className="grid">
        <div className="sucessd-num">
           <p>2</p>
        </div>
        <div className="sucessd-img">
          <img src={step1} />
        </div>
        <div className="sucessd-content">
          <h3>EMPOWER & MANAGE AFFILIATES</h3>
          <ul>
            <li>Help affiliates access promotion resources</li>
            <li>Customize everything to meet your requirements</li>
            <li>Control how the affiliate refers your brand</li>
          </ul>
        </div>
        </div>
      <div className="grid">
        <div className="sucessd-num">
        3
        </div>
        <div className="sucessd-img">
          <img src={step1} />
        </div>
        <div className="sucessd-content">
          <h3>GROW YOUR TEAM, GROW YOUR BUSINESS</h3>
          <ul>
            <li>Support your team through built-in communication channels.</li>
            <li>
              Keep track of and optimize affiliate performance through the
              report system.
            </li>
            <li>
              Attract more potential customers and see your sales skyrocket!
            </li>
          </ul>
        </div>
        </div>
       
        
        <button>Learn More</button>
    
    </div>
  );
};

export default SuceedPage;

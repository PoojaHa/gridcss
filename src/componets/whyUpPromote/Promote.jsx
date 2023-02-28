import React from "react";
import promoteimg from "../../assets/get-marketplace.png";
import "./Promote.css";
const Promote = () => {
  return (
    <div className="promote-wrapper"> 
    <h1>WHY UPPROMOTE?</h1>
    <div className="promote-container">
          
      <div className="promate-grid-1">
        <div className="promote-item">
          <h2>Grow with UpPromote <br/>Marketplace</h2>
          <p>
            List your affiliate offer on the UpPromote marketplace and get
            discovered by potential affiliates/influencers
          </p>
        </div>

        <div  className="promote-item">
          <h2>Easy migration & integration</h2>
          <p>
            Free migration from other affiliate platforms. <br/>All the key data can
            be moved with just a few clicks.<br/> Powerful integration with other
            services to expand your campaign.
          </p>
        </div>
        <div  className="promote-item">
          <h2>Real-time tracking</h2>
          <p>
            Up-to-the-second tracking system is constantly improved to ensure
            conversions are instantly and accurately recorded. Various tracking
            methods, such as links, coupons, emails, products.
          </p>
        </div>
        <div  className="promote-item"> 
          <h2>Powerful management</h2>
          <p>
            Convenient communication options help you keep in touch with your
            team. White-labeled affiliate pages and fully customized email
            templates make the whole campaign yours.
          </p>
        </div>
      </div>
      <div className="img-div">
        <img src={promoteimg} />
      </div>
    </div>
    </div>
  );
};

export default Promote;

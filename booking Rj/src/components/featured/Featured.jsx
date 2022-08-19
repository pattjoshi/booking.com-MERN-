import React from 'react'
import "./featured.css"

const Featured = () => {
    return (
      <div className="featured">
        <div className="featuredItem">
          <img
             src="https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_800,q_75,w_1200/v1/clients/lexington/VLEX_9683_01_Spring_Guide_To_Lexington_Raven_Run_c769a217-649a-40ca-9b17-04f45e75052e.jpg"
            alt="kilkata river"
            className="featuredImg"
          />
          <div className="featuredTitles">
            <h1>kolkata 🇮🇳</h1>
            <h2>153 properties</h2>
          </div>
        </div>
        
        <div className="featuredItem">
          <img
            src="https://media.iceportal.com/25562/photos/61936840_XL.jpg"
            alt="candolim 🇮🇳"
            className="featuredImg"
          />
          <div className="featuredTitles">
            <h1>candolim 🇮🇳</h1>
            <h2>533 properties</h2>
          </div>
        </div>
        <div className="featuredItem">
          <img
            src="https://assets.airtrfx.com/media-em/j9/cities/mumbai-BOM-RiverHotel.jpg"
            alt="mumbai 🇮🇳"
            className="featuredImg"
          />
          <div className="featuredTitles">
            <h1>mumbai 🇮🇳</h1>
            <h2>502 properties</h2>
          </div>
        </div>
      </div>
    );
  };
  
  export default Featured;


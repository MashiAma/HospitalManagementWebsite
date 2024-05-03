import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
        <h3 style={{ textAlign: "center" }}>Our Services</h3>
          <p>
          Our hospitals are well-equipped with modern facilities that make use of 
          the latest technological advancements to ensure your comfort as well as 
          best clinical outcome. As an internationally accredited hospital chain, 
          we always remain mindful of the requirement to offer world class services 
          to you and your family. We’ve secured the services of some of the country’s 
          finest talent in the medical arena to provide the best possible care and 
          guidance to you. 
          </p>    
          <p>We take care of your preventive and curative healthcare requirements at
          our state-of-the-art facilities. Collectively, our hospitals can 
          accommodate 190 in-house patients where you can be rest assured of 
          receiving care on par with international standards. Our island wide 
          laboratory services network is well-equipped with the cutting-edge 
          technology, equipment and skilled professionals to provide accurate 
          diagnostic investigations.          
          </p>
        </div>
      </div>
    </>
  );
};

export default Biography;

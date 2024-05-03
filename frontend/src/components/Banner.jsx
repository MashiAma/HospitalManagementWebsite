import React from "react";

const Banner = ({ title, imageUrl }) => {
  return (
    <>
      <div className="banner container">
      
        <div className="banner">
        {/* <hr style={{ width: "100%", borderTop: "2px solid black" }} /> */}
        <div><h1 style={{ color: "rgb(14, 14, 87)" }}>{title}</h1></div>
          <h3 style={{ textAlign: "center" }}>Welcome to MediCare Hospitals</h3>
          <p>
          You and your loved ones are safe in our internationally 
          accredited care. Our scope of healthcare services revolves 
          around patient safety and we offer you highly specialized 
          medical care including tertiary and super specialty care 
          at our state-of-the-art facilities. you can rest easy while
          our practiced and qualified medical staff works around the 
          clock to ensure a superior patient experience. 
          </p>
        </div>
        <div className="banner">
          <img src={imageUrl} alt="banner" className="animated-image" />
        </div>
      </div>
    </>
  );
};

export default Banner;


{/* <div><hr style={{ width: "100%", borderTop: "2px solid black" }} /></div> */}
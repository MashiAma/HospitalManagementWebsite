import React from "react";
import Banner from "../components/Banner";
import Biography from "../components/Biography";
const AboutUs = () => {
  return (
    <>
      <Banner
        title={"Learn More About Us | MediCare Hospitals"}
        imageUrl={"/whoweare.jpg"}
      />
      <Biography imageUrl={"/whoweare1.jpg"} />
    </>
  );
};

export default AboutUs;

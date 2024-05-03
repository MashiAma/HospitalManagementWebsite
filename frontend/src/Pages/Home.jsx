import React, { useContext } from "react";
import Banner from "../components/Banner";
import Biography from "../components/Biography";
import MessageForm from "../components/MessageForm";
import Departments from "../components/Departments";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Banner
        title={
          "MediCare Hospitals | Best Healthcare Provider"
        }
        imageUrl={"/banner.jpg"}
      />
      <Biography imageUrl={"/about.jpg"} />
      <Departments />
      <MessageForm />
    </>
  );
};

export default Home;

import React from "react";
import Banner from "../components/Banner";
import AppointmentForm from "../components/AppointmentForm";

const Appointment = () => {
  return (
    <>
      <Banner
        title={"Schedule Your Appointment | MediCare Hospitals"}
        imageUrl={"/signin.jpg"}
      />
      <br /><br />
      <AppointmentForm/>
    </>
  );
};

export default Appointment;

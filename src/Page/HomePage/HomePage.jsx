import React from "react";
import CollegeList from "../../Component/CollegeList";
import MentorList from "../../Component/MentorList";
import Advisor from "../../Component/Advisor";

const HomePage = () => {
  return (
    <>
      <CollegeList />
      <MentorList />
      <Advisor />
    </>
  );
};

export default HomePage;

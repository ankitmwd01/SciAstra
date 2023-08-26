import { Heading, Box, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import MentorData from "../Data/MentorData";
import AdvisorBox from "./AdvisorBox";

const Advisor = () => {
  const [count, setCount] = useState(4);

  return (
    <Box>
      <Heading className="MentorHeading">Mentor And Advisor</Heading>
      <Box className="MentorList">
        {MentorData?.slice(0, count).map((val, ind) => (
          <AdvisorBox
            key={ind}
            clg={val.College}
            Name={val.Name}
            Img={val.img}
          ></AdvisorBox>
        ))}
      </Box>
      <Box className="ShowMore">
        <Button
          size="sm"
          onClick={() => {
            count <= 4 ? setCount(MentorData?.length) : setCount(8);
          }}
        >
          {count > 4 ? "Show Less" : "Show More"}
        </Button>
      </Box>
    </Box>
  );
};

export default Advisor;

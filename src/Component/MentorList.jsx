import { Box, Button, Heading } from "@chakra-ui/react";
import React, { useState } from "react";
import MentorData from "../Data/MentorData";
import MentorBox from "./MentorBox";
const MentorList = () => {
  const [count, setCount] = useState(8);

  return (
    <Box>
      <Heading className="MentorHeading">Meet Your Mentors</Heading>
      <Box className="MentorList">
        {MentorData?.slice(0, count).map((val, ind) => (
          <MentorBox
            key={ind}
            clg={val.College}
            Name={val.Name}
            Img={val.img}
          ></MentorBox>
        ))}
      </Box>
      <Box className="ShowMore">
        <Button
          size="sm"
          onClick={() => {
            count <= 8 ? setCount(MentorData?.length) : setCount(8);
          }}
        >
          {count > 8 ? "Show Less" : "Show More"}
        </Button>
      </Box>
    </Box>
  );
};

export default MentorList;

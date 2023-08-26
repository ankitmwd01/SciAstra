import { Box, Text, Button, Heading } from "@chakra-ui/react";
import React, { useState } from "react";
import collegeList from "../Data/CollegeDetail";
import CollegeBox from "./CollegeBox";
const CollegeList = () => {
  const [count, setCount] = useState(12);
  return (
    <Box>
      <Box>
        <Heading className="MentorHeading">Team Page</Heading>

        <Heading className="subHeading" size="md">
          Learn from scientists, research scholars from the top institutes in
          the world
        </Heading>
      </Box>
      <Box className="CollegeList">
        {collegeList?.slice(0, count).map((val, ind) => (
          <CollegeBox key={ind} Name={val}></CollegeBox>
        ))}
      </Box>
      <Box className="ShowMore">
        <Button
          size="sm"
          onClick={() => {
            count <= 12 ? setCount(collegeList?.length) : setCount(12);
          }}
        >
          {count > 12 ? "Show Less" : "Show More"}
        </Button>
      </Box>
    </Box>
  );
};

export default CollegeList;

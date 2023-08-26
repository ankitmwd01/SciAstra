import { Text, Box } from "@chakra-ui/react";
import React from "react";

const CollegeBox = ({ Name }) => {
  return (
    <Box className="CollegeBox">
      <Text className="Text">{Name}</Text>
    </Box>
  );
};

export default CollegeBox;

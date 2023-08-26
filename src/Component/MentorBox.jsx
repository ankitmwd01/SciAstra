import { Avatar, Text, Box } from "@chakra-ui/react";
import React from "react";

const MentorBox = ({ Name, clg, Img }) => {
  return (
    <Box className="MentorBox">
      <Avatar size={"xl"} src={Img} />
      <Text>{Name}</Text>
      <Text>{clg}</Text>
    </Box>
  );
};

export default MentorBox;

import { Avatar, Box, Text, Button, position } from "@chakra-ui/react";
import React from "react";

const AdvisorBox = ({ Name, clg, Img, position }) => {
  return (
    <Box className="MentorBox">
      <Avatar size={"xl"} src={Img} />
      <Text>{Name}</Text>
      <Text>{position}</Text>
      <Text>{clg}</Text>
      <Button size="sm">Message Now</Button>
    </Box>
  );
};

export default AdvisorBox;

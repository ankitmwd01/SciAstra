import { Avatar, Box, Text, Button } from "@chakra-ui/react";
import React from "react";

const AdvisorBox = ({ Name, clg, Img }) => {
  return (
    <Box className="MentorBox">
      <Avatar size={"xl"} src={Img} />
      <Text>{Name}</Text>
      <Text>{clg}</Text>
      <Button size="sm">Message Now</Button>
    </Box>
  );
};

export default AdvisorBox;

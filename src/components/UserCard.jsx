import React from "react";
import { Box, Text, Image } from "@chakra-ui/react";

const UserCard = ({ user }) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      textAlign="center"
      mt="3"
      mb="4"
      boxShadow="rgba(62, 172, 232, 0.933) 0px 54px 55px, rgba(0, 10, 121, 0.758) 0px -12px 30px, rgba(142, 214, 234, 0.862) 0px 4px 6px, rgba(41, 87, 203, 0.878) 0px 12px 13px, rgba(87, 196, 238, 0.884) 0px -3px 5px;"
    >
      <Image src={user.avatar_url} alt={user.login} m={"auto"} className="img-thumbnail" />
      <Box p="3">
        <Text color="blue.500" fontSize={"3xl"} fontWeight="bold">
          {user.name}
        </Text>
        <Text color="blue.300" fontWeight="bold">{user.location}</Text>
        <Text color="blue.200">{user.bio}</Text>
        <Text color="blue.100">Followers {user.followers}</Text>
      </Box>
    </Box>
  );
};

export default UserCard;

import React, { useState } from "react";
import Axios from "axios";
import {
  Box,
  Input,
  Button,
  InputGroup,
  Heading,
  Container,
  Grid,
  GridItem,
  useToast,
} from "@chakra-ui/react";

import UserCard from "../components/UserCard";
import Repos from "../components/Repos";

const Home = () => {
  const [query, setQuery] = useState("");
  const [user, setUser] = useState(null);
  const toast = useToast();

  const fetchDetails = async () => {
    try {
      const { data } = await Axios.get(`https://api.github.com/users/${query}`);
      setUser(data);
      console.log({ data });
    } catch (error) {
      toast({
        title: "Error",
        description: "Not able to locate user",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Container maxW={"container.lg"} mt={3}>
      <Heading fontWeight={"900"} size="2xl" m={"5%"} color={"blue.500"}>Welcome to the GitHub Profile Search App</Heading>
      <InputGroup>
        <Input
          bg={"#fff"}
          mt={"10px"}
          mb={"10px"}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Please provide the username"
        />
        {/* <InputRightElement width="4.5rem"> */}
        <Button
          mt={"10px"}
          mb={"10px"}
          h="2.50rem"
          size="sm"
          onClick={fetchDetails}
          colorScheme="blue"
        >
          Fetch User
        </Button>
        {/* </InputRightElement> */}
      </InputGroup>
      <Grid templateColumns="repeat(2, 1fr)" gap={4}>
        <GridItem colSpan={1} m={"4%"}>

          {user ? <UserCard user={user} /> : null}
        </GridItem>
        <GridItem colSpan={1} m={"4%"}>
          {user ? <Repos repos_url={user.repos_url} /> : null}
        </GridItem>
      </Grid>
    </Container>
  );
};

export default Home;

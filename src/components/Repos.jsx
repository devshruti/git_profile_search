import React, { useState, useEffect } from "react";
import Axios from "axios";
import { List, ListItem, Text } from "@chakra-ui/react";

const Repos = ({ repos_url }) => {
  const [repos, setRepos] = useState([]);

  const fetchRepos = async () => {
    try {
      const { data } = await Axios.get(repos_url);
      setRepos(data);
    } catch (error) {
      console.error("Error fetching repos:", error);
    }
  };

  useEffect(() => {
    fetchRepos();
  }, [repos_url]);

  return (
    <List>
      {repos.map((repo) => (
        <ListItem key={repo.id} borderWidth="1px" borderRadius="md" p="3" mb="2"
          boxShadow="rgba(130, 194, 243, 0.947) 0px 1px 2px 0px, rgb(89, 174, 239) 0px 1px 3px 1px"
          backgroundColor={"rgb(99, 177, 236)"}
        >
          <Text color="blue.500" fontWeight="bold" fontSize={"2xl"}>
            {repo.name}
          </Text>
          <Text color="gray.300" fontSize={"xl"} fontWeight="bold">{repo.language}</Text>
          <Text color="blue.200" p={"2%"}>{repo.description}</Text>
        </ListItem>
      ))}
    </List>
  );
};

export default Repos;

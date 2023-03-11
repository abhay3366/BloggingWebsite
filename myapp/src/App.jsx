import React from "react";
import Search from "./Search";
import Pagniation from "./Pagniation";
import Stories from "./Stories";

import { Center, Heading } from "@chakra-ui/react";
const App = () => {
  return (
    <>
      <Center p={5}>
        <Heading as="h2" size="md">
          Welcome to Blogging Section
        </Heading>
      </Center>
      <Search />
      <Pagniation />
      <Stories />
    </>
  );
};

export default App;

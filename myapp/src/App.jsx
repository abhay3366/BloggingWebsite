import React from "react";
import Search from "./Search";
import Pagniation from "./Pagniation";
import Stories from "./Stories";

import { Center, Heading } from "@chakra-ui/react";
const App = () => {
  return (
    <div style={{ backgroundColor: "#3FEEE7" }}>
      <Center p={5}>
        <Heading as="h2" size="xl" color={"red.700"}>
          Welcome to Blogging Section
        </Heading>
      </Center>
      <Search />
      <Pagniation />
      <Stories />
    </div>
  );
};

export default App;

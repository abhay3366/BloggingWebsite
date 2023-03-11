import { Button, Text,Flex, Center } from "@chakra-ui/react";
import React, { useContext } from 'react'
import { AppContext } from "./Context/Context";

const Pagniation = () => {
    const { page, nbPage, getPrevPage, getNextPage } = useContext(AppContext);
  return (
    <div style={{ backgroundColor: "#3FEEE7" }}>
      <Center gap={3} padding={5}>
        <Button onClick={() => getPrevPage()}>Prev</Button>
        <Button disabled>
          {page + 1} of {nbPage}
        </Button>
        <Button onClick={() => getNextPage()}>Next</Button>
      </Center>
    </div>
  );
}

export default Pagniation
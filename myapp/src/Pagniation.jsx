import { Button, Text,Flex, Center } from "@chakra-ui/react";
import React, { useContext } from 'react'
import { AppContext } from "./Context/Context";

const Pagniation = () => {
    const { page, nbPage, getPrevPage, getNextPage } = useContext(AppContext);
  return (
    <Center gap={3} padding={5}>
        <Button onClick={()=>getPrevPage()}>Prev</Button>
        <Button disabled>{page+1} of {nbPage}</Button>
        <Button onClick={()=>getNextPage()}>Next</Button>
    </Center>
  )
}

export default Pagniation
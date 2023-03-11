import React, { useContext } from "react";
import { AppContext } from "./Context/Context";
import { Center, Input } from "@chakra-ui/react";

const Search = () => {
  const { query, searchPost } = useContext(AppContext);
  return (
    <div style={{ backgroundColor: "#3FEEE7" }}>
      <Center>
        <form onSubmit={(e) => e.preventDefault()}>
          <Input
            color="teal"
            focusBorderColor="pink.400"
           
            _placeholder={{ opacity: 0.8, color: "inherit" }}
            w={250}
            placeholder="Search here"
            size="md"
            value={query}
            onChange={(e) => searchPost(e.target.value)}
          />
        </form>
      </Center>
    </div>
  );
};

export default Search;

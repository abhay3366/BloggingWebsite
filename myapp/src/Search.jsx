import React, { useContext } from "react";
import { AppContext } from "./Context/Context";
import { Center, Input } from "@chakra-ui/react";

const Search = () => {
  const { query, searchPost } = useContext(AppContext);
  return (
    <div>
      <Center>
        <form onSubmit={(e) => e.preventDefault()}>
          <Input
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

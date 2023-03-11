import { Center, Heading } from "@chakra-ui/react";
import React, { useContext } from "react";
import { AppContext } from "./Context/Context";

import { Card, Text, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import BlogCard from "./BlogCard";
const Stories = () => {
  const data = useContext(AppContext);
  const { hits, nbPage, isLoading } = data;
  if(isLoading){
    return(
        <h1>Loading...</h1>
    )
  }

  return (
    <>
      <Center>
        <Heading>My Tec News </Heading>
      </Center>
      {hits.length > 0 &&
        hits.map((currPost) => {
          return (
            <BlogCard
              title={currPost.title}
              author={currPost.author}
              num_comments={currPost.num_comments}
              url={currPost.url}
              objectID={currPost.objectID}
            />
          );
        })}
    </>
  );
};

export default Stories;

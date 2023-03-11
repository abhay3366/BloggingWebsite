import React, { useContext } from "react";
import {
  Card,
  Stack,
  Box,
  StackDivider,
  Heading,
  CardBody,
  Text,
  Link,
  Button,
  Flex,
} from "@chakra-ui/react";
import { AppContext } from "./Context/Context";

const BlogCard = ({ title, author, num_comments, url, objectID }) => {
  const {removePost}=useContext(AppContext)
  return (
    <div style={{backgroundColor:"red"}}>
      <Card bg={"red.300"} m={3}>
        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              <Heading size="xs" textTransform="uppercase">
                {title}
              </Heading>
              <Text pt="2" fontSize="sm">
                By {author} | <span>{num_comments}</span> comments
              </Text>
              <Flex gap={15} justifyContent={"space-between"} padding={5}>
                <Button>
                  <Link href={url} tabIndex="_blank">
                    Read more
                  </Link>
                </Button>
                <Button>
                  <Link href="#" onClick={()=>removePost(objectID)}>
                    Remove
                  </Link>
                </Button>
              </Flex>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </div>
  );
};

export default BlogCard;

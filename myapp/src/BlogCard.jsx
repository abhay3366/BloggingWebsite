import React from "react";
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

// let API = "https://hn.algolia.com/api/v1/search?";
// let url = `${API}query=${state.query}&page=${state.page}`;
// console.log(url)
const BlogCard = ({ title, author, num_comments,url }) => {
  //   console.log("🚀 ~ file: BlogCard.jsx ~ line 5 ~ BlogCard ~ props", props);
  return (
    <div>
      <Card>
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
                  <Link href={url} tabIndex="_blank">Read more</Link>
                </Button>
                <Button>
                  <Link>Remove</Link>
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

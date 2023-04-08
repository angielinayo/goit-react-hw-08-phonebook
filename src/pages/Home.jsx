import { Box, Heading } from '@chakra-ui/react';
import React from 'react';

const Home = () => {
  return (
    <>
      <Box maxW="32rem" m="auto" pt="50px">
        <Heading mb={4}>Welcome to your personal phonebook</Heading>
      </Box>
    </>
  );
};

export default Home;

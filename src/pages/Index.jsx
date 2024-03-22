import React from "react";
import { Box, Flex, Heading, Text, Input, Icon, VStack, HStack, Spacer } from "@chakra-ui/react";
import { FaRegDotCircle } from "react-icons/fa";

const Index = () => {
  return (
    <Flex direction="column" minHeight="100vh">
      <Box bg="gray.100" py={4} px={8}>
        <Flex align="center">
          <Heading size="lg" mr={2}>
            Devin's Workspace
          </Heading>
          <Text fontSize="xl" fontWeight="bold" mr={8}>
            品
          </Text>
          <HStack spacing={8}>
            <Text>Following</Text>
            <Text>Shell</Text>
            <Text>Browser</Text>
            <Text>Editor</Text>
            <Text>Planner</Text>
          </HStack>
        </Flex>
      </Box>

      <VStack flex={1} justify="center" spacing={8} px={8}>
        <Text fontSize="2xl">Devin is waiting to start up</Text>
        <Input size="lg" placeholder="Hey Devin, I'd like for you to benchmark Llama 2 on three different providers" defaultValue="Hey Devin, I'd like for you to benchmark Llama 2 on three different providers: Replicate [00: KD· Live ?" />
      </VStack>

      <Flex bg="gray.100" justify="flex-end" py={4} px={8} borderTop="1px" borderColor="gray.200">
        <Flex align="center">
          <Icon as={FaRegDotCircle} color="green.500" mr={2} />
          <Text>Devin is in private beta and may make mistakes</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Index;

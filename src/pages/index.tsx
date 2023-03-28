import { Box, Button, Checkbox, Flex, FormControl, FormLabel, Heading, HStack, Input, Text, VStack } from '@chakra-ui/react'

function Home(): JSX.Element {

  return (
    <Flex direction="column" justify="center" minHeight="100vh">
      <Box
        w={["full", "lg"]}
        p={[8, 10]}
        mx="auto"
        border={["none", "1px"]}
        borderColor={["", "gray.300"]}
        borderRadius={10}
      >
        <VStack spacing={5} mt="1.5em" mb="4em" align="flex-start" w="full">
          <VStack spacing={1} align={["flex-start", "center"]} w="full" p="15px">
            <Heading textAlign="center" mb="5px">Sign in to your account</Heading>
            <Text
              textAlign="center"
            >
              Log in untuk dapat mengakses semua layanan
            </Text>
          </VStack>
          <FormControl>
            <FormLabel>E-Mail Address</FormLabel>
            <Input
              variant="filled"
              placeholder="Enter your email address"
            />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              variant="filled"
              type="password"
              placeholder="Enter your password"
            />
          </FormControl>
          <HStack p="5px" w="full">
            <Checkbox>Remember me</Checkbox>
            <Button variant="link" colorScheme="blue">Forgot Password?</Button>
          </HStack>
          <Button
            rounded="md"
            colorScheme="blue"
            w="full"
          >
            Sign in
          </Button>
          <HStack w="full" justify="center">
            <Text>Don't have an account?</Text>
            <Button
              variant="link"
              colorScheme="blue"
            >
              <a href="/signup">Sign Up</a>
            </Button>
          </HStack>
        </VStack>
      </Box>
    </Flex>
  )
}

export default Home;


import { useAuth } from '@/context/AuthContext';
import { Box, Button, Checkbox, Flex, FormControl, FormLabel, Heading, HStack, Input, Text, useToast, VStack } from '@chakra-ui/react'
import { useFormik } from 'formik';
import toast from 'react-hot-toast';

interface LoginType {
  email: string;
  password: string;
}

function Home(): JSX.Element {
  const { logIn } = useAuth();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false
    },
    onSubmit: async (values: LoginType) => {
      const myPromise = logIn(values.email, values.password)
        .then((response: any) => {
          console.log(response);
        }).catch((error: any) => {
          throw error;
        });;
      toast.promise(
        myPromise,
        {
          loading: "Loading...",
          success: "Login berhasil!",
          error: "Email atau Kata Sandi anda salah!",
        }
      );
    }
  });

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
          </VStack>
          <Box p={6} w="full" rounded="md">
            <form onSubmit={formik.handleSubmit}>
              <VStack spacing={4} align="flex-start">
                <FormControl>
                  <FormLabel htmlFor="email">Email Address</FormLabel>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    variant="filled"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    variant="filled"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                  />
                </FormControl>
                <Checkbox
                  id="rememberMe"
                  name="rememberMe"
                  onChange={formik.handleChange}
                  isChecked={formik.values.rememberMe}
                  colorScheme="purple"
                >
                  Remember me?
                </Checkbox>
                <Button type="submit" colorScheme="purple" width="full">
                  Login
                </Button>
              </VStack>
            </form>
          </Box>
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
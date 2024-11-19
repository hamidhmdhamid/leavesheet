import React from 'react';
import {
  Flex,
  Heading,
  Input,
  Button,
  FormControl,
  FormLabel,
  Switch,
  useColorMode,
  useColorModeValue,
  Text,
} from '@chakra-ui/react';

const Login = () => {
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue('gray.100', 'gray.700');

  return (
    <Flex h="100vh" alignItems="center" justifyContent="center">
      <Flex
        flexDirection="column"
        bg={formBackground}
        p={12}
        borderRadius={8}
        boxShadow="lg"
      >
        <Heading textAlign="center" mb={10}>
          خوش آمدید
        </Heading>
        <Text textAlign="right" mb={3}>
          : کد پرسنلی
        </Text>
        <Input placeholder="95551411" type="number" variant="filled" mb={3} />
        <Text textAlign="right" mb={3}>
          : کلمه عبور
        </Text>
        <Input
          placeholder="**********"
          type="password"
          variant="filled"
          mb={6}
        />
        <Button colorScheme="teal" mb={8}>
          ورود
        </Button>
      </Flex>
    </Flex>
  );
};

export default Login;

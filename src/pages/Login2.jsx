import { useContext, useState } from 'react';

import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  Spinner,
  InputLeftElement,
  chakra,
  Box,
  Avatar,
  FormControl,
  InputRightElement,
  useToast,
} from '@chakra-ui/react';

import { FaUserAlt, FaLock } from 'react-icons/fa';
import axios from 'axios';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router';

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const Login2 = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loging, setLoging] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();

  const handleShowClick = () => setShowPassword(!showPassword);

  const handleChangePerson = event => setUsername(event.target.value);

  const handleChangePassword = event => setPassword(event.target.value);

  const handleLogin = async e => {
    e.preventDefault();
    if (username != '' && password != '') {
      try {
        setLoging(true);
        const post = await axios.post(
          'http://94.183.213.199:8000/signin',
          { username, password },
          { headers: 'content-type:application/json' }
        );
        if (post.data.token) {
          navigate('/dashboard', {
            state: { token: post.data.token, userId: post.data.userId },
          });
        }
      } catch {
        toast({
          title: 'خطا',
          description: 'نام کاربری یا رمز عبور اشتباه است.',
          status: 'error',
          duration: 2000,
          isClosable: false,
        });
      }
      setLoging(false);
    }
  };
  return (
    <>
      <Navbar />
      <Flex
        flexDirection="column"
        width="100wh"
        height="60vh"
        backgroundColor=""
        justifyContent="center"
        alignItems="center"
      >
        <Stack
          flexDir="column"
          mb="2"
          justifyContent="center"
          alignItems="center"
        >
          <Avatar bg="teal.500" />
          <Heading color="teal.400">خوش آمدید</Heading>
          <Box minW={{ base: '90%', md: '468px' }}>
            {/* <form onSubmit={console.log('submit')}> */}
            <Stack spacing={4} p="1rem" boxShadow="md">
              <FormControl>
                <InputGroup>
                  <InputRightElement
                    pointerEvents="none"
                    children={<CFaUserAlt color="gray.300" />}
                  />
                  <Input
                    pr="37px"
                    onChange={handleChangePerson}
                    textAlign="right"
                    type="number"
                    placeholder="کدپرسنلی"
                  />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputRightElement
                    pointerEvents="none"
                    children={<CFaLock color="gray.300" />}
                  />
                  <Input
                    onChange={handleChangePassword}
                    textAlign="right"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="رمز عبور"
                  />
                  <InputLeftElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                      {showPassword ? 'مخفی' : 'نمایش'}
                    </Button>
                  </InputLeftElement>
                </InputGroup>
              </FormControl>
              <Button
                borderRadius={0}
                type="submit"
                onClick={handleLogin}
                variant="solid"
                colorScheme="teal"
                width="full"
                isDisabled={username && password ? false : true}
              >
                {loging ? <Spinner size="sm" /> : 'ورود'}
              </Button>
            </Stack>
            {/* </form> */}
          </Box>
        </Stack>
      </Flex>
    </>
  );
};

export default Login2;

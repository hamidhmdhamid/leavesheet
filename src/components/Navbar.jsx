import React from 'react';
import { UnlockIcon } from '@chakra-ui/icons';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Button,
  IconButton,
  Image,
  Flex,
  Heading,
  Spacer,
  HStack,
  Avatar,
  AvatarBadge,
  useToast,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

function Navbar() {
  const toast = useToast();
  return (
    <Flex as="nav" maxHeight="150px" p="10px" mb="0px" alignItems="center">
      <Heading as="h1" fontSize="1.5em">
        درخواست مرخصی
      </Heading>
      <Spacer />
      <ColorModeSwitcher />
    </Flex>
  );
}

export default Navbar;

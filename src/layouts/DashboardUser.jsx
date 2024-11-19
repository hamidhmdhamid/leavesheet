'use client';

import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Text,
  Drawer,
  DrawerContent,
  useDisclosure,
  BoxProps,
  FlexProps,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Spacer,
  useToast,
} from '@chakra-ui/react';
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiBell,
  FiChevronDown,
  FiList,
  FiUser,
  FiPower,
} from 'react-icons/fi';
import { IconType } from 'react-icons';
import { useContext, useEffect, useState } from 'react';
import { ColorModeSwitcher } from '../components/ColorModeSwitcher';
import Home from '../pages/Home';
import { ContextApp } from '../context/context-provider';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import TablesSono from '../components/TableSono';



const SidebarContent = ({ onClose, LinkItems, ...rest }) => {
  return (
    <Box
      overflow="hidden"
      bg={useColorModeValue('white', 'gray.900')}
      borderLeft="1px"
      borderLeftColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontWeight="bold">
          درخواست مرخصی
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map(link => (
        <NavItem key={link.name} icon={link.icon} onClick={()=>link.onClick()}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

const NavItem = ({ icon, children, ...rest }) => {
  return (
    <Box
      overflow="hidden"
      as="a"
      href="#"
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'teal.400',
          color: 'white',
        }}
        {...rest}
      >
        {icon && (
          <Icon
            ml="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Box>
  );
};

const MobileNav = ({ user, onOpen, ...rest }) => {
  return (
    <Flex
      overflow="hidden"
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      width="100vw"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent={{ base: 'space-between', md: 'flex-end' }}
      {...rest}
    >
      <IconButton
        display={{ base: 'flex', md: 'none' }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text
        display={{ base: 'flex', md: 'none' }}
        fontSize="xl"
        fontWeight="bold"
        textAlign="right"
      >
        درخواست مرخصی
      </Text>

      <HStack spacing={{ base: '0', md: '6' }}>
        <ColorModeSwitcher />
        <IconButton
          size="md"
          fontSize="2xl"
          variant="ghost"
          aria-label="open menu"
          icon={<FiBell />}
          ml="30px"
        />

        <Flex alignItems={'center'}>
          <Menu>
            <MenuButton py={2} transition="none" _focus={{ boxShadow: 'none' }}>
              <HStack>
                <Avatar size={'sm'} src={'./avatar/hmd.png'} />
                <VStack
                  display={{ base: 'none', md: 'flex' }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2"
                >
                  <Text fontSize="sm">{user.name}</Text>
                  <Text fontSize="xs" color="gray.600">
                    {user.level == 'admin' ? 'مدیر فنی' : 'پرسنل آزمایشگاه'}
                  </Text>
                </VStack>
                <Box overflow="hidden" display={{ base: 'none', md: 'flex' }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue('white', 'gray.900')}
              borderColor={useColorModeValue('gray.200', 'gray.700')}
              transition="none"
            >
              <MenuItem
                bg={useColorModeValue('white', 'gray.900')}
                _hover={{
                  bg: 'teal.400',
                  color: 'white',
                }}
              >
                <Box overflow="hidden" pl="10px">
                  <FiUser />
                </Box>
                پروفایل
              </MenuItem>
              <MenuItem
                bg={useColorModeValue('white', 'gray.900')}
                _hover={{
                  bg: 'teal.400',
                  color: 'white',
                }}
              >
                <Box overflow="hidden" pl="10px">
                  <FiSettings />
                </Box>
                تنظیمات
              </MenuItem>
              <MenuDivider />
              <MenuItem
                bg={useColorModeValue('white', 'gray.900')}
                _hover={{
                  bg: 'teal.400',
                  color: 'white',
                }}
              >
                <Box overflow="hidden" pl="10px">
                  <FiPower />
                </Box>
                خروج
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};

const DashboardUser = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const location = useLocation();
  const navigate = useNavigate();
  const [token, setToken] = useState('');
  const toast = useToast();
  const [user, setUser] = useState({ name: 'hMd' });
  const [listsono,setListsono] = useState([{}]);

  const getUser = async () => {
    try {
      const res = await axios.get('http://94.183.213.199:8000/user', {
        headers: { Authorization: 'Bearer ' + token },
      });
      setUser(res.data);
      return res.data;
    } catch {
      console.log('Eroror');
      return {};
    }
  };

  
  const getSonoList = async() =>{
    try {
     
      const res = await axios.get('http://94.183.213.199:8000/sonolist/all', {
        headers: { Authorization: 'Bearer ' + token },
      });
      setListsono(res.data);
      console.log(res.data)
      return res.data;
    } catch {
      console.log('Eroror');
      return {};
    }
  }
  const LinkItems = [
    { name: 'خانه', icon: FiHome , onClick:async ()=>{} },
    { name: 'لیست سونو ها', icon: FiList,onClick:async ()=>{getSonoList()} },
    { name: 'درخواست مرخصی', icon: FiCompass , onClick:async ()=>{}},
    { name: 'کارتابل', icon: FiStar , onClick:async ()=>{}},
    { name: 'تنظیمات', icon: FiSettings ,onClick:async ()=>{} },
  ];
  
  useEffect(() => {
    //   if (localStorage.getItem('token') != token) {
    //     if (location.state) {
    //       if (location.state.token != localStorage.getItem('token')) {
    //if (location.state.token) setToken(location.state.token);
    //     localStorage.setItem('token', location.state.token);
    //   }
    // } else {
    //   navigate('/');
    // }
    //}
    // setToken(
    //   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IjMwODAxNDY2MDMiLCJpZCI6MSwiaWF0IjoxNzMxOTYxMDc2LCJleHAiOjE3MzQxMjEwNzZ9.N7k-oSzX86NeT7ZamwRqC3yjL5zFzL4gsXN5aseiNO8'
    // );
    setToken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IjMwODAxNDY2MDMiLCJpZCI6MSwiaWF0IjoxNzMyMDA3NjUwLCJleHAiOjE3MzQxNjc2NTB9.2WdmO5FupDhmz9sO8YOB_2u4QYzBOFXOsAYR3C1ayJc')
    getUser();
  }, [token]);
  return (
    <Box
      overflow={false}
      minH="100vh"
      bg={useColorModeValue('gray.100', 'gray.900')}
    >
      <SidebarContent
        LinkItems={LinkItems}
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      <MobileNav user={user} onOpen={onOpen} />
      <Box mr={{ base: 0, md: 60 }} p="4">
        {(listsono.length > 1 )? <TablesSono listsono = {listsono} /> : <></>}
      </Box>
    </Box>
  );
};

export default DashboardUser;

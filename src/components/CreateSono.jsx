import { Box, Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import { useState } from 'react';

function CreateSono(handleCreateSono) {
  const [name, setName] = useState('');
  const [codeMelli, setCodeMelli] = useState('');
  const [age, setAge] = useState('');
  const [mob, setMob] = useState('');
  const [nameDoctor, setNameDoctor] = useState('');
  const [address, setAddress] = useState('');

  const handleInput = event => {
    const target = event.target;

    if (target.name === 'name') {
      setName(target.value);
    } else if (target.name === 'codeMelli') {
      setCodeMelli(target.value);
    } else if (target.name === 'age') {
      setAge(target.value);
    } else if (target.name === 'mob') {
      setMob(target.value);
    } else if (target.name === 'nameDoctor') {
      setNameDoctor(target.value);
    } else if (target.name === 'address') {
      setAddress(target.name.value);
    }
  };

  return (
    <Box width={'sm'} textAlign={'center'}>
      <FormControl isRequired>
        <FormLabel>نام و نام خانوادگی : </FormLabel>
        <Input
          onChange={handleInput}
          name="name"
          placeholder="نام و نام خانوادگی"
        />
      </FormControl>
      <FormControl mt={5} isRequired>
        <FormLabel>کد ملی : </FormLabel>
        <Input onChange={handleInput} name="codeMelli" placeholder="کد ملی" />
      </FormControl>
      <FormControl mt={5} isRequired>
        <FormLabel>سن : </FormLabel>
        <Input onChange={handleInput} name="age" placeholder="سن" />
      </FormControl>
      <FormControl mt={5} isRequired>
        <FormLabel>شماره همراه : </FormLabel>
        <Input onChange={handleInput} name="mob" placeholder="شماره همراه" />
      </FormControl>
      <FormControl mt={5} isRequired>
        <FormLabel>نام دکتر: </FormLabel>
        <Input
          onChange={handleInput}
          name="nameDoctor"
          placeholder="نام دکتر"
        />
      </FormControl>
      <FormControl mt={5} isRequired>
        <FormLabel>نام دکتر: </FormLabel>
        <Input onChange={handleInput} name="address" placeholder="نام دکتر" />
      </FormControl>
      <Button mt={5} onClick={() => {}}>
        ایجاد
      </Button>
    </Box>
  );
}

export default CreateSono;
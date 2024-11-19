import { EmailIcon, DeleteIcon } from '@chakra-ui/icons';
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from '@chakra-ui/react';

function ModalRemoveItem({handleRemoveSono,id}) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Button size="sm" iconSpacing={0} rightIcon={<DeleteIcon />} onClick={onOpen} />
      
      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>اخطار !</ModalHeader>
          
          <ModalBody pb={6}>
         آیا از پاک شدن این آیتم اطمینال دارید ؟
         <br/>
         درنظر داشته باشید تمامی اطلاعات این آیتم از قبیل عکس و .... پاک میشوند
          </ModalBody>

          <ModalFooter>
            <Button onClick={()=>handleRemoveSono(id)} bgColor={'red.400'} _hover={{textColor:'white'}} ml={3}>
              پاک شود
            </Button>
            <Button onClick={onClose}>انصراف</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

function TablesSono({listsono,handleRemoveSono}) {
  
  return (

    <div>
      
    <TableContainer width={'100%'}>
      <Table variant="striped" colorScheme="teal">
        <Thead>
          <Tr>
            <Th>نام و نام خانوادگی</Th>
            <Th>کد ملی</Th>
            <Th>شماره تماس</Th>
            <Th>سن (سال)</Th>
            <Th>نام آزمایش</Th>
            <Th>نام دکتر</Th>
            <Th>عملیات</Th>
          </Tr>
        </Thead>
        <Tbody>
          {listsono.map(sono=>(
                <Tr key={sono.id}>
                <Td>{sono.name}</Td>
                <Td>{sono.codeMelli}</Td>
                <Td>{sono.mob}</Td>
                <Td>{sono.age}</Td>
                <Td>{sono.nameSono}</Td>
                <Td>{sono.nameDoctor}</Td>

                <Td>
                  {/* <Button
                    size="sm"
                    iconSpacing={0}
                    rightIcon={<DeleteIcon />}
                    onClick={()=>(<ManualClose />)}
                  ></Button> */}
                  <ModalRemoveItem id={sono.id} handleRemoveSono={handleRemoveSono}/>
                </Td>
                </Tr>

          ))}
         
        </Tbody>
      </Table>
    </TableContainer>
    </div>
  );
}

export default TablesSono;

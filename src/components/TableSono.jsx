import { EmailIcon, DeleteIcon } from '@chakra-ui/icons';
import {
  Button,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';

function TablesSono({listsono}) {
  
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
                <Td>{sono.nameDoktor}</Td>

                <Td>
                  <Button
                    size="sm"
                    iconSpacing={0}
                    rightIcon={<DeleteIcon />}
                  ></Button>
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

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import Navbar from "../navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <TableContainer>
        <Table variant="striped" colorScheme="teal">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>E-mail</Th>
              <Th>Password</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Robert</Td>
              <Td>rob23@gmail.com</Td>
              <Td>robert123</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}

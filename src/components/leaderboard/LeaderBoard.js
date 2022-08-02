import {
  Heading,
  Stack,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react';

import LiveChat from '../livechat/LiveChat';

const LeaderBoard = () => {
  return (
    <Stack w={'30%'} py={'2'}> 
      <Stack direction={'column'} bgColor={'#071836'}>
        <Heading
          backgroundColor={'#41240F'}
          p={'2'}
          size={'sm'}
          textAlign={'center'}
          border={'2px solid yellow'}
          color={'#EFB94A'}
        >
          LeaderBoard
        </Heading>
        <TableContainer mt={'0 !important'} >
          <Table variant="unstyled"  >
            <Thead>
              {/* <Tr>
                <Th>To convert</Th>
                <Th>into</Th>
                <Th isNumeric>multiply by</Th>
                <Th isNumeric>To Convert</Th>
              </Tr> */}
            </Thead>
            <Tbody bgColor={'#071836'}>
              <Tr>
                <Td color={'#FF0066'}>1</Td>
                <Td color={'#25F933'}>Sohaib</Td>
                <Td isNumeric color={'#FF0066'}>
                  25.4
                </Td>
                <Td isNumeric color={'#FF0066'}>
                  25.4
                </Td>
              </Tr>
              <Tr>
                <Td color={'#00C3F6'}>2</Td>
                <Td color={'#20DEFC'}>Sufyan</Td>
                <Td isNumeric color={'#00C3F6'}>
                  30.48
                </Td>
                <Td isNumeric color={'#00C3F6'}>
                  25.4
                </Td>
              </Tr>
              <Tr border={'2px solid blue'}>
                <Td color={'#5AFFEE'}>3</Td>
                <Td color={'#FCA120'}>Asad (m)</Td>
                <Td isNumeric color={'#5AFFEE'}>
                  0.91444
                </Td>
                <Td isNumeric color={'#5AFFEE'}>
                  25.4
                </Td>
              </Tr>
              <Tr>
                <Td color={'#FFB300'}>4</Td>
                <Td color={'#641B2C'}>Mustafa</Td>
                <Td isNumeric color={'#DC9D07'}>
                  30.48
                </Td>
                <Td isNumeric color={'#E8A405'}>
                  25.4
                </Td>
              </Tr>
              <Tr>
                <Td color={'#EB0263'}>5</Td>
                <Td color={'#25F933'}>Gohar</Td>
                <Td isNumeric color={'#EB0263'}>
                  30.48
                </Td>
                <Td isNumeric color={'#EB0263'}>
                  25.4
                </Td>
              </Tr>

              {/* <Tr>
                <Td>6</Td>
                <Td>Saad</Td>
                <Td isNumeric>30.48</Td>
                <Td isNumeric>25.4</Td>

              </Tr>
              <Tr>
                <Td>7</Td>
                <Td>Ali</Td>
                <Td isNumeric>30.48</Td>
                <Td isNumeric>25.4</Td>

              </Tr>

              <Tr>
                <Td>8</Td>
                <Td>Awab</Td>
                <Td isNumeric>30.48</Td>
                <Td isNumeric>25.4</Td>

              </Tr>

              <Tr>
                <Td>9</Td>
                <Td>Naveed</Td>
                <Td isNumeric>30.48</Td>
                <Td isNumeric>25.4</Td>

              </Tr>

              <Tr>
                <Td>10</Td>
                <Td>Awais</Td>
                <Td isNumeric>30.48</Td>
                <Td isNumeric>25.4</Td>

              </Tr> */}
            </Tbody>
            <Tfoot></Tfoot>
          </Table>
        </TableContainer>
        <Stack w={'100%'} mt={'0 !important'}>
          <LiveChat />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default LeaderBoard;

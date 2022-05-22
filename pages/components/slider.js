import React from 'react'
import { 
    NumberInput, 
    NumberInputField, 
    NumberInputStepper, 
    NumberIncrementStepper, 
    NumberDecrementStepper,
    Button,
    ButtonGroup,
    VStack
} from '@chakra-ui/react';
import Deso from 'deso-protocol';
const deso = new Deso();

export default function slider() {
    const [login] = useState([]);
    const format = (val) => `$` + val
    const parse = (val) => val.replace(/^\$/, '')
    const request = 3;
    useEffect(() => {
        async function getLogin(){
            const response = await deso.identity.login(request);
            login(response.data.results)
        }
        getLogin();
    }, [request]);
  
    const [value, setValue] = React.useState('1')
  
    return (
        <VStack pt={450} position="absolute">
            <NumberInput
        onChange={(valueString) => setValue(parse(valueString))}
        value={format(value)}
        min={1}
        max={500}
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <Button colorScheme='blue'>Donate Now</Button>
        </VStack>
    )
}


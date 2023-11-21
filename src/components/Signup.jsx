import { Avatar, Button, Container, Heading, Input, Text, VStack} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import React from 'react'

const Signup = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>


        <form>
            <VStack alignItems={'stretch'} spacing={'8'} w={['full','96']} m={'auto'} my={'16'}>
                <Heading textAlign={'center'}>VIDEO HUB</Heading>
                <Avatar alignSelf={'center'} boxSize={'32'}/>

                <Input placeholder='Enter your Name' type='text' required focusBorderColor='blue.500'/>
                <Input placeholder='Enter your Email' type='email' required focusBorderColor='blue.500'/>
                <Input placeholder='Enter Password' type='password' required focusBorderColor='blue.500'/>

                <Button colorScheme='blue' type='submit'>Sign Up</Button>

                <Text textAlign={'right'}>Already have an account?{'   '}
                <Button variant={'link'} colorScheme='blue'>
                    <Link to={'/login'}>Log In</Link>
                </Button>
                </Text>

            </VStack>
        </form>
    </Container>
  )
}

export default Signup
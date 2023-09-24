import React, { useEffect, useState } from 'react'
import {
    VStack,
    Input,
    InputGroup,
    InputRightElement,
    Button,
} from '@chakra-ui/react';
// import ".../src"
import axios from 'axios';

const SignUp = () => {

    const [showPassword, setShowPassword] = useState(false);

    const handleClick = () => {
        setShowPassword(!showPassword);
    };

    return (
        <form method='post' action="">

            <div className='log'>
                <VStack spacing={4}>

                    <Input type='name' placeholder='ENTER YOUR NAME' />
                    <Input type='name' placeholder='ENTER YOUR DEPARTMENT' />
                    <Input type='number' placeholder='ENTER YOUR DEPARTMENT ID' />
                    <Input type='email' placeholder='ENTER YOUR E-MAIL' />
                    <InputGroup>
                        <Input type={showPassword ? 'text' : 'password'}
                            placeholder='ENTER YOUR PASSWORD' />
                        <InputRightElement width='5.5rem' height='3rem' >
                            <Button onClick={handleClick} size='lg' variant={'solid'} colorScheme={'facebook'}>
                                {showPassword ? 'Hide' : 'Show'}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                    <InputGroup>
                        <Input type={showPassword ? 'text' : 'password'}
                            placeholder='CONFIRM YOUR PASSWORD' />
                        <InputRightElement width='5.5rem' height='3rem' >
                            <Button onClick={handleClick} size='lg' variant={'solid'} colorScheme={'facebook'}>
                                {showPassword ? 'Hide' : 'Show'}
                            </Button>
                        </InputRightElement>
                    </InputGroup>

                    <Button
                        size='md'
                        height='48px'
                        width='200px'
                        border='2px'
                        borderColor='green.500'
                    >
                        Sign Up
                    </Button>

                </VStack>
            </div>
        </form>
    )
}

export default SignUp

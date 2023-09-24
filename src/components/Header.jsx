import React from 'react'
import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
    Img,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { BiMenuAltLeft } from 'react-icons/bi'
import "../styling/index.scss"
import logo from "../img/logo/logo.png"
import Login from './Login';
import Home from './Home';
import ImgIcon from './ImgIcon';
import Cart from './Cart';
import SignUp from './SignUp';
import { useSelector } from 'react-redux'; 
import { FiShoppingCart } from 'react-icons/fi';
const Header = () => {
    const { cartItems } = useSelector((state) => state.cart);
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <div className="top">
                <Button
                    pos={'fixed'}
                    colorschema="purple"
                    top={'6'}
                    left={'6'}
                    // p={'0'}
                    // w={'20'}
                    // h={'10'}
                    borderRadius={'full'}
                    variant="ghost"
                    onClick={onOpen}
                >
                    <BiMenuAltLeft size={'30'} />
                </Button>
                <Button
                    pos={'fixed'}
                    //   colorschema="purple"
                    top={'6'}
                    borderRadius={'full'}
                    right={'100px'}
                    variant="ghost">
                    <FiShoppingCart size={'30'} onClick/>
                    <p>{cartItems.length}</p>
                </Button>

            </div>

            <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>
                        <div className="logo">
                            <Image src={logo} w={'25'} h={'175'} />
                        </div>
                        <DrawerBody>
                            <div className="head">
                                <Link to={'Home'}><h1>HOME</h1></Link>
                                <Link to={'https://www.drdo.gov.in/'}><h1>OFFICIAL WEBSITE</h1></Link>
                                <Link to={'/'}><h1>SERVICES</h1></Link>
                                <Link to={'Cart'}><h1>CART</h1></Link>
                                <Link to={'/'}> <h1>CONTACT US</h1></Link>
                            </div>
                        </DrawerBody>
                    </DrawerHeader>
                    <DrawerFooter>

                        <div className="foot">

                            <Link to={'Login'}><Button>
                                Login
                            </Button>
                            </Link>

                            <Link to={'SignUp'}>

                            <Button>
                                Sign up
                            </Button>
                            </Link>
                        </div>
                    </DrawerFooter>
                </DrawerContent>

            </Drawer>

        </>

    )
}

export default Header
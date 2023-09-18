import React from 'react'
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { IconButton, VStack, HStack, Input, InputRightElement, InputGroup, InputLeftElement, Image, Img } from '@chakra-ui/react'
import { AiOutlineAudio, AiOutlineCamera, AiOutlineMinus, AiOutlineSearch } from 'react-icons/ai'
import img1 from "../img/banner/001.jpg"
import img2 from "../img/banner/002.jpg"
import img3 from "../img/banner/003.jpg"
import img4 from "../img/banner/004.jpg"
import img5 from "../img/banner/005.jpg"
import img6 from "../img/banner/006.jpg"
import img7 from "../img/banner/007.jpg"
import img8 from "../img/banner/008.jpg"
import img9 from "../img/banner/009.jpg"
import img10 from "../img/banner/010.jpg"
import ImgIcon from './ImgIcon'
import ImgIcon2 from './ImgIcon2'
import ImgIcon3 from './ImgIcon3'
import { Link } from 'react-router-dom'
import "../styling/index.scss"
const Home = () => {
    return (
        <>
            <HStack className="search"
                width={'74'}>

                <InputGroup width={'50'}>

                    <Input type={'text'} placeholder={'SEARCH HERE'} />

                    <InputLeftElement>
                        <IconButton
                            colorScheme='blue'
                            aria-label='Search database'
                            variant={'ghost'}
                            icon={< AiOutlineSearch />}
                        />
                    </InputLeftElement>
                    <InputRightElement>
                        <IconButton
                            colorScheme='blue'
                            aria-label='Search database'
                            variant={'ghost'}
                            icon={< AiOutlineAudio />}
                        />
                    </InputRightElement>
                </InputGroup>
            </HStack>

            <div className="over">

                {/* banner section */} 

                <Image src={img1} borderRadius={'30px'}
                    width={'100%'}
                />
                <div className="ban">

                    <Image src={img2}
                        borderRadius={'30px'}
                        width={'100%'}
                    />

                    <Image src={img3}
                        borderRadius={'30px'}
                        width={'100%'}
                    />
                </div>


                <div className="data">
                    <ImgIcon />
                    <ImgIcon2 />
                </div>


                <div className="ban">
                    <Image src={img4} borderRadius={'30px'} width={'100%'} />
                    <Image src={img5} borderRadius={'30px'} width={'100%'} />
                </div>

                
                    <div className="data">
                    <p>OFFICE UTILIES</p>
                        <ImgIcon3 />
                    </div>
                


                <div className="ban">
                    <Image src={img6} borderRadius={'30px'} width={'100%'} height={'100%'}></Image>
                    <Image src={img7} borderRadius={'30px'} width={'100%'}></Image>
                </div>
                <div className="ban">
                    <Image src={img8} borderRadius={'30px'} width={'100%'}></Image>
                    <Image src={img9} borderRadius={'30px'} width={'100%'}></Image>
                    <Image src={img10} borderRadius={'30px'} width={'100%'}></Image>
                </div>
            </div>

        </>

    )
}

export default Home

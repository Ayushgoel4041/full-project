import { AddIcon, SearchIcon, StarIcon } from '@chakra-ui/icons';
import { Button, HStack, Image } from '@chakra-ui/react';
import React from 'react'
import { useDispatch } from 'react-redux';
import '../styling/penpage.scss'
import { toast } from 'react-hot-toast';
const pageData = [
    
    {
        pen: require('../img/scissors/12.jpg'),
        label: "Metalic Scissors",
        price: "Rs. 60.00",
        id:"e13e21"


    },
    {
        pen: require('../img/scissors/14.jpg'),
        label: "Maped 13cm -5 Scissor",
        price: "Rs. 90.00",
        id:"30e32e3e",


    },
    {
        pen: require('../img/scissors/13.jpg'),
        label: "Cuuter ",
        price: "Rs. 60.00",
        id:"3edewfrwvfer0",


    },
    {
        pen: require('../img/scissors/f1.jpg'),
        label: "SCOTCH multi-purpose scissors",
        price: "Rs. 90.00",
        id:"30rewfwf",


    },
    {
        pen: require('../img/scissors/k1.jpg'),
        label: "MUNIX Scissor",
        price: "Rs. 50.00",
        id:"303e32e",


    },
    {
        pen: require('../img/scissors/s1.jpg'),
        label: "Black multi-purpose scissors",
        price: "Rs. 100.00",
         id:"3831",

    },
    {
        pen: require('../img/scissors/scR.jpeg'),
        label: "Mini Scissor blue ",
        price: "Rs. 90.00",
         id:"3832",


    },
    {
        pen: require('../img/scissors/d1.jpg'),
        label: "Scissor (3 in 1)",
        price: "Rs. 150.00",
         id:"3834",

    }
];
const ImgScissors = () => {
    const dispatch = useDispatch()

    const addToCartHandler = (options) => {
    
      dispatch({type:"addToCart" , payload:options})
      toast.success("Added To Cart");
    };
    return (
        <>
            <div className="page">

                <div className="product">
                    <h1>PRODUCT CATEGORIES</h1>
                    <a href="/">Gel Pens</a>
                    <a href="/" >Roller Pens</a>
                    <a href="/">Fountain Pens</a>
                    <a href="/" >Pencils</a>
                    <a href="/">Highlighters</a>
                    <a href="/">Notebooks</a>
                    <a href="/">Planners</a>
                    <a href="/">Sticky Notes</a>
                    <a href="/">Eraser & Collection</a>
                    <a href="/">Calculator</a>
                    <a href="/">Fevicols</a>
                    <a href="/" className="active">Scissors</a>
                    <a href="/">Steppler</a>
                    <a href="/" >Pins</a>
                    <a href="/" >Punching Hole</a>
                    <a href="/">Dairy</a>
                </div>
                <HStack>
                    <div className="penicon">
                        {pageData.map((item, index) => (
                            <div className="penhandle" key={index}>
                                <Image src={item.pen} width={'100%'} height={'100%'}/>


                                <h1>{item.label}</h1>

                                <div className="price">
                                    <h2>{item.price}</h2>
                                    <del>{item.remo}</del>
                                    <h3>{item.save}</h3>
                                    <div className="star">

                                        <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon />
                                    </div>
                                </div>
                                <Button onClick={() => addToCartHandler(item)}>
                                    <AddIcon fontSize={'20'} color={'white'} />
                                </Button>
                            </div>


                        ))}
                    </div>
                </HStack>
            </div>
        </>
    )
}

export default ImgScissors

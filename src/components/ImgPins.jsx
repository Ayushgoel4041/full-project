import { AddIcon, SearchIcon, StarIcon } from '@chakra-ui/icons';
import { Button, HStack, Image } from '@chakra-ui/react';
import React from 'react'
import { toast } from 'react-hot-toast';
import '../styling/penpage.scss'
import { useDispatch } from 'react-redux';

const pageData = [
    {
        pen: require('../img/pins.jpeg'),
        label: "Pure(small window) Gel Pens",
        price: "Rs. 552.50",
        remo: "Rs. 650.00", 
        id:"6cddcdw0",
        save: "Rs." + (650.00 - 552.50)

    },
    {
        pen: require('../img/stepller/1.jpg'),
        label: "Kangaroo Staples 24/6-1M",
        price: "Rs. 10.00",
 
 id:"60fwf",
    },
    {
        pen: require('../img/stepller/4.jpg'),
        label: "Kangaroo Staples 24/6-1M (20)Box",
        price: "Rs. 192.50",
        remo: "Rs. 210.00", 
        id:"6cdw0",
        save: "Rs." + (210.00 - 192.50)
    }
];

const ImgPins = () => {
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
                    <a href="/">Scissors</a>
                    <a href="/">Steppler</a>
                    <a href="/" className="active">Pins</a>
                    <a href="/">Punching Hole</a>
                    <a href="/">Dairy</a>
                </div>
                <HStack>
                    <div className="penicon">
                        {pageData.map((item, index) => (
                            <div className="penhandle" key={index}>
                                <Image src={item.pen} />


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

export default ImgPins

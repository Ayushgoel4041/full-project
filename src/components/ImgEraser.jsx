import { toast } from 'react-hot-toast';
import { AddIcon, SearchIcon, StarIcon } from '@chakra-ui/icons';
import { Button, HStack, Image } from '@chakra-ui/react';
import React from 'react'
import { useDispatch } from 'react-redux';
import '../styling/penpage.scss'

const pageData = [
  {
    pen: require('../img/erasers & shappner/aa1.jpg'),
    label: "NATARAJ Dust Clean Eraser",
    price: "Rs. 5.00",
    id:"6"

  },
  {
    pen: require('../img/erasers & shappner/apsara.jpg'),
    label: "APSARA Non Dust Eraser",
    price: "Rs. 8.50",
    id:"7"
  },
  {
    pen: require('../img/erasers & shappner/eraser.jpg'),
    label: "DOMS Extra LOng Dust Free Eraser",
    price: "Rs. 10.00",
    id:"8"
  },
  {
    pen: require('../img/erasers & shappner/sh1.jpg'),
    label: "NATARAJ Sharpner",
    price: "Rs. 7.50",
    id:"9"
  },
  {
    pen: require('../img/erasers & shappner/sharp.jpg'),
    label: "Fancy Sharpners",
    price: "Rs. 15.50",
    id:"10"

  },
  {
    pen: require('../img/erasers & shappner/sharp11.jpg'),
    label: "Fancy Eraser And Sharpner (2 in 1)",
    price: "Rs. 20.00",
    id:"1"

  }
];
const ImgEraser = () => {
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
            <a href="/">Roller Pens</a>
            <a href="/">Fountain Pens</a>
            <a href="/">Pencils</a>
            <a href="/">Highlighters</a>
            <a href="/">Notebooks</a>
            <a href="/">Planners</a>
            <a href="/">Sticky Notes</a>
            <a href="/" className="active">Eraser & Collection</a>
            <a href="/">Calculator</a>
            <a href="/">Fevicols</a>
            <a href="/">Scissors</a>
            <a href="/">Steppler</a>
            <a href="/">Pins</a>
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

export default ImgEraser


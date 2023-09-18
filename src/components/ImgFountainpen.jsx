import { AddIcon, SearchIcon, StarIcon } from '@chakra-ui/icons';
import { Button, HStack, Image } from '@chakra-ui/react';
import React from 'react'
import { toast } from 'react-hot-toast';
import '../styling/penpage.scss'
import { useDispatch } from 'react-redux';
const pageData = [
  {
    pen: require('../img/icon/3.jpg'),
    label: "Inked pen Fountain pen",
    price: "Rs. 552.50",
    remo: "Rs. 650.00",
    id:"18",
    save: "Rs." + (650.00 - 552.50)

  },
  {
    pen: require('../img/pen/pen.jpg'),
    label: "Perk Fountain Pen",
    price: "Rs. 652.50",
    remo: "Rs. 750.00",
    id:"19",
    save: "Rs." + (750.00 - 652.50)
  }
];
const ImgFountainpen = () => {
  const dispatch = useDispatch()

  const addToCartHandler = (options) => {

    dispatch({ type: "addToCart", payload: options })
    toast.success("Added To Cart");
  };
  return (
    <>
      <div className="page">

        <div className="product">
          <h1>PRODUCT CATEGORIES</h1>
          <a href="/">Gel Pens</a>
          <a href="/">Roller Pens</a>
          <a href="/" className="active">Fountain Pens</a>
          <a href="/">Pencils</a>
          <a href="/">Highlighters</a>
          <a href="/">Notebooks</a>
          <a href="/">Planners</a>
          <a href="/">Sticky Notes</a>
          <a href="/">Eraser & Collection</a>
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

export default ImgFountainpen

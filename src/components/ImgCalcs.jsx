import { AddIcon, SearchIcon, StarIcon  } from '@chakra-ui/icons';
import { Button, HStack, Image } from '@chakra-ui/react';
import React from 'react'
import { toast } from 'react-hot-toast';
import '../styling/penpage.scss'
import { useDispatch } from 'react-redux';
import { FiShoppingCart } from 'react-icons/fi'
const pageData = [
  {
    pen: require('../img/calc/alge_calc.jpeg'),
    label: "Algae calc Texas Instrument",
    price: "Rs. 552.50",
    remo: "Rs. 650.00",
    save: "Rs." + (650.00 - 552.50),
    id:"1"

  },
  {
    pen: require('../img/calc/c12.jpg'),
    label: "CASIO DJ-220D plus 12 Digits",
    price: "Rs. 252.50",
    id:"2"
  },
  {
    pen: require('../img/calc/calc.jpg'),
    label: "CASIO MS-8B",
    price: "Rs. 300.00",
    remo: "Rs. 390.50",
    id:"3",
    save: "Rs." + (390.50 - 300.00)
  },
  {
    pen: require('../img/calc/w1.jpg'),
    label: "CASIO fx-260 Solar FRACTION",
    price: "Rs. 332.50",
    id:"4"

  },
  {
    pen: require('../img/calc/j1.jpg'),
    label: "CASIO fx-85ES PLLUS natural V.P.A.M",
    price: "Rs. 972.50",
    remo: "Rs. 1100.00",
    id:"5",
    save: "Rs." + (1100.00 - 972.50)
  }
];
const ImgCalcs = () => {
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
          <a href="/" >Roller Pens</a>
          <a href="/">Fountain Pens</a>
          <a href="/">Pencils</a>
          <a href="/">Highlighters</a>
          <a href="/">Notebooks</a>
          <a href="/">Planners</a>
          <a href="/">Sticky Notes</a>
          <a href="/">Eraser & Collection</a>
          <a href="/" className="active">Calculator</a>
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

export default ImgCalcs

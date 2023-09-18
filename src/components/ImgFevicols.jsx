import { AddIcon, SearchIcon, StarIcon } from '@chakra-ui/icons';
import { Button, HStack, Image } from '@chakra-ui/react';
import React from 'react'
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import '../styling/penpage.scss'

const pageData = [
  {
    pen: require('../img/fevicols/k1.jpg'),
    label: "Fevicol MR Glue pen",
    price: "Rs. 10.00",
    id: "12"

  },
  {
    pen: require('../img/fevicols/l1.jpg'),
    label: "Fevicol MR Glue",
    price: "Rs. 9.50",
    id: "13"

  },
  {
    pen: require('../img/fevicols/b1.jpg'),
    label: "Fevicol SH Synthetic resin (5kg)",
    price: "Rs. 652.50",
    remo: "Rs. 750.00",
    save: "Rs." + (750.00 - 652.50),
    id: "14"
  },
  {
    pen: require('../img/fevicols/h1.jpg'),
    label: "FeviStick Glue stick",
    price: "Rs. 20.00",
    id: "15"
  },
  {
    pen: require('../img/fevicols/glue.jpg'),
    label: "Perk Fountain Pen",
    price: "Rs. 652.50",
    remo: "Rs. 750.00",
    save: "Rs." + (750.00 - 652.50),
    id: "16"
  },
  {
    pen: require('../img/fevicols/v1.jpg'),
    label: "Scotch Glue Stick",
    price: "Rs. 22.50",
    id: "17"
  }
];
const ImgFevicols = () => {
  const dispatch = useDispatch()
  const addToCartHandler = (options) => {
    dispatch({ type: "addToCart", payload: options })
    dispatch({ type: "calculatePrice" });
    toast.success("Added To Cart");
  };
  return (
    <>
      <div className="page">

        <div className="product">
          <h1>PRODUCT CATEGORIES</h1>
          <a href="/">Gel Pens</a>
          <a href="/">Roller Pens</a>
          <a href="/" >Fountain Pens</a>
          <a href="/">Pencils</a>
          <a href="/">Highlighters</a>
          <a href="/">Notebooks</a>
          <a href="/">Planners</a>
          <a href="/">Sticky Notes</a>
          <a href="/">Eraser & Collection</a>
          <a href="/">Calculator</a>
          <a href="/" className="active">Fevicols</a>
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

export default ImgFevicols

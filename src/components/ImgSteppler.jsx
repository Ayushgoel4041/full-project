import { AddIcon, SearchIcon , StarIcon } from '@chakra-ui/icons';
import { Button, HStack, Image } from '@chakra-ui/react';
import React from 'react'
import { toast } from 'react-hot-toast';
import '../styling/penpage.scss'
import { useDispatch } from 'react-redux';
const pageData = [
   {
    pen: require('../img/stepller/k1.jpg'),
    label: "Stapler | Staples |Staple Remove",
    price: "Rs. 195.50",
    remo: "Rs. 250.00",
    id:"3812efew",
    save: "Rs." + (250.00 - 195.50)
  },
  {
    pen: require('../img/stepller/m1.jpg'),
    label: "Kangaroo Steppler",
    price: "Rs. 80.00",
    id:"3812eghbe",

  },
  {
    pen: require('../img/stepller/q1.jpg'),
    label: "MINI Kangaroo Steppler | Remover",
    price: "Rs. 50.00",
    id:"3812ehnh",
  },
  {
    pen: require('../img/stepller/STAPLER.jpg'),
    label: "Metallic Blue Steppler",
    price: "Rs. 55.50",
    id:"3812e21",

  },
  {
    pen: require('../img/stepller/stap.jpeg'),
    label: "XRexel",
    price: "Rs. 52.50",
    id:"3812cddwce",

  }
];

const ImgSteppler = () => {
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
<a href="/" className="active">Steppler</a>
<a href="/" >Pins</a>
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

                <StarIcon/> <StarIcon/> <StarIcon/> <StarIcon/> <StarIcon/> 
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

export default ImgSteppler

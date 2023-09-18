import { AddIcon, SearchIcon , StarIcon } from '@chakra-ui/icons';
import { Button, HStack, Image } from '@chakra-ui/react';
import React from 'react'
import { toast } from 'react-hot-toast';
import '../styling/penpage.scss'
import { useDispatch } from 'react-redux';
const pageData = [
  {
    pen: require('../img/files/OIP.jpg'),
    label: "Official Dairy",
    price: "Rs. 292.50",
    remo: "Rs. 350.00", 
    id:"9lojn0",
    save: "Rs." + (350.00 - 292.50)

  },
  
  {
    pen: require('../img/files/y1.jpg'),
    label: "Grey Binded planner", 
    id:"9ffv0",
    price: "Rs. 200.00",

  },
  
  {
    pen: require('../img/files/23.jpg'),
    label: "All in One Planner Dairy",
    price: "Rs. 599.50", 
    id:"9fewf0",


  },
  
  {
    pen: require('../img/files/u1.jpg'),
    label: "Brown Binded planner",
    price: "Rs. 152.50", 
    id:"9fd0",
 
  }
];
const ImgPlanners = () => {
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
<a href="/" className="active">Planners</a>
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

export default ImgPlanners

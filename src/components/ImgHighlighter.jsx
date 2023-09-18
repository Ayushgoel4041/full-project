import { AddIcon, SearchIcon , StarIcon } from '@chakra-ui/icons';
import { Button, HStack, Image } from '@chakra-ui/react';
import React from 'react'
import { toast } from 'react-hot-toast';
import '../styling/penpage.scss'
import { useDispatch } from 'react-redux';
const pageData = [
  {
    pen: require('../img/highlighter/b1.jpg'),
    label: "Smudge Highlighters",
    price: "Rs. 49.50",
    id:"21"
  
  },
  {
    pen: require('../img/highlighter/c1.jpg'),
    label: "LUXAR Gloliter Marker Pen",
    price: "Rs. 70.00",
    id:"22"
  },
  {
    pen: require('../img/highlighter/d1.jpg'),
    label: "Flysen easy Wipe-one",
    price: "Rs. 52.50",
    remo: "Rs. 60.00",
    id:"23",
    save: "Rs." + (60.00 - 52.50)
  },
  {
    pen: require('../img/highlighter/e1.jpg'),
    label: "Flysea Liquid CHalr",
    price: "Rs. 55.00",
  id:"24"
  }
];
const ImgHighlighter = () => {
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
<a href="/">Pencils</a>
<a href="/" className="active">Highlighters</a>
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

export default ImgHighlighter

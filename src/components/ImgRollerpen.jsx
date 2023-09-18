import { AddIcon, SearchIcon , StarIcon } from '@chakra-ui/icons';
import { Button, HStack, Image } from '@chakra-ui/react';
import React from 'react'
import { toast } from 'react-hot-toast';
import '../styling/penpage.scss'
import { useDispatch } from 'react-redux';
const pageData = [
  {
    pen: require('../img/icon/2.jpg'),
    label: "Pure(small window) Ball Pens",
    price: "Rs. 552.50",
    remo: "Rs. 650.00",
     id:"9830",
    save: "Rs." + (650.00 - 552.50)

  },
  {
    pen: require('../img/pen/ballpen/b1.jpg'),
    label: "Butterflow blue ball Pens",
     id:"9832",
    price: "Rs 15.00"
  },
  {
    pen: require('../img/pen/ballpen/n1.jpg'),
    label: "Medium Tik-Tak pointed Pens",
     id:"9834",
    price: "Rs 25.00"
  },
  {
    pen: require('../img/pen/ballpen/o1.jpg'),
    label: "Octane extra smooth ball Pens",
     id:"9830dsf",
    price: "Rs 15.00"
  },
  {
    pen: require('../img/pen/ballpen/q1.jpg'),
    label: "Pentonic Pointed Pens",
     id:"9830ww",
    price: "Rs 10.00"
  },
  {
    pen: require('../img/pen/ballpen/r1.jpg'),
    label: "Reynolds extra smooth Pens",
     id:"983wfew0",
    price: "Rs 10.00"
  },
  {
    pen: require('../img/pen/ballpen/s1.jpg'),
    label: "Reynolds blue ball pen",
     id:"9830kmpk",
    price: "Rs 15.00"
  },
  {
    pen: require('../img/pen/ballpen/z1.jpg'),
    label: "LINC Glycer pointed pen",
     id:"9830lnl",
    price: "Rs 10.00"
  },
  {
    pen: require('../img/pen/ballpen/y1.jpg'),
    label: "Reynolds black ball pen",
     id:"9830wiugsfwu",
    price: "Rs 15.00"
  }
];
const ImgRollerpen = () => {
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
<a href="/" className="active">Roller Pens</a>
<a href="/">Fountain Pens</a>
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

export default ImgRollerpen

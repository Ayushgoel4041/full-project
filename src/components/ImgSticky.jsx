import { AddIcon, SearchIcon , StarIcon } from '@chakra-ui/icons';
import { Button, HStack, Image } from '@chakra-ui/react';
import React from 'react'
import { toast } from 'react-hot-toast';
import '../styling/penpage.scss'
import { useDispatch } from 'react-redux';

const pageData = [
  {
    pen: require('../img/icon/1.jpg'),
    label: "Pure(small window) Gel Pens",
    price: "Rs. 552.50",
    remo: "Rs. 650.00",
    id:"7823eq32e",
    save: "Rs." + (650.00 - 552.50)

  },
  {
    pen: require('../img/pen/gelpen8/a1.jpg'),
    label: "Ener Gel Pens",
    price: "Rs. 552.50",
    remo: "Rs. 650.00",
    id:"78233r32",
    save: "Rs." + (650.00 - 552.50)
  },
  {
    pen: require('../img/pen/gelpen8/k2.jpg'),
    label: "Medium Pointed Gel Pens",
    price: "Rs. 552.50",
    remo: "Rs. 650.00",
    id:"7823jmjy",
    save: "Rs." + (650.00 - 552.50)
  },
  {
    pen: require('../img/pen/gelpen8/f1.jpg'),
    label: "World Gel Pens",
    price: "Rs. 552.50",
    remo: "Rs. 650.00",
    id:"7823fsfvs",
    save: "Rs." + (650.00 - 552.50)
  },
  {
    pen: require('../img/pen/gelpen8/g1.jpg'),
    label: "Ener Gel Pens",
    price: "Rs. 552.50",
    remo: "Rs. 650.00",
    id:"7823ewr",
    save: "Rs." + (650.00 - 552.50)
  },
  {
    pen: require('../img/pen/gelpen8/t1.jpg'),
    label: "Trimax Gel Pens",
    price: "Rs. 552.50",
    remo: "Rs. 650.00",
    id:"7823ffdv",
    save: "Rs." + (650.00 - 552.50)
  },
  {
    pen: require('../img/pen/gelpen8/l1.jpg'),
    label: "Add Acheiver Gel Pens",
    price: "Rs. 552.50",
    remo: "Rs. 650.00",
    id:"7823gerg",
    save: "Rs." + (650.00 - 552.50)
  },
  {
    pen: require('../img/pen/gelpen8/p1.jpg'),
    label: "Reynolds Jiffy Gel Pens",
    price: "Rs. 552.50",
    remo: "Rs. 650.00",
    id:"7823pok",
    save: "Rs." + (650.00 - 552.50)
  }
];
const ImgSticky = () => {
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
<a href="/" className="active">Sticky Notes</a>
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

export default ImgSticky

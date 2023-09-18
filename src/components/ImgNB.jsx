import { AddIcon, SearchIcon , StarIcon } from '@chakra-ui/icons';
import { Button, HStack, Image } from '@chakra-ui/react';
import React from 'react'
import { toast } from 'react-hot-toast';
import '../styling/penpage.scss'
import { useDispatch } from 'react-redux';
const pageData = [
  {
    pen: require('../img/others/binding_nb.jpg'),
    label: "Classmate Pulse 6subject NoteBook",
    price: "Rs. 250.00",
    remo: "Rs. 350.00",
     id:"30fe",
    save: "Rs." + (350.00 - 200.00)

  },
  {
    pen: require('../img/others/dairy.jpeg'),
    label: "Notebook A5",
    price: "Rs. 200.00",
    remo: "Rs. 250.00", 
    id:"30hnj",
    save: "Rs." + (250.00 - 200.00)
  },
  {
    pen: require('../img/others/download.jpg'),
    label: "A4 sized binned notebooks",
    price: "Rs. 98.50", 
    id:"30eqdrr",
  },
 
  {
    pen: require('../img/others/nb.jpg'),
    label: "Classmate a$ lined Notebook",
    price: "Rs. 55.50", 
    id:"30sdq",
 
  }
];
const ImgNB = () => {
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
<a href="/">Highlighters</a>
<a href="/" className="active">Notebooks</a>
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

export default ImgNB

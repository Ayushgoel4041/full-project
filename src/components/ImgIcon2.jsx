import React from 'react'
import { HStack, VStack, Image , Img} from '@chakra-ui/react';
import "../styling/imagestyling.scss";
import ImgNB from './ImgNB';
import ImgPlanners from './ImgPlanners';
import ImgSticky from './ImgSticky';
import ImgEraser from './ImgEraser';
import ImgCalcs from './ImgCalcs';
const iconData = [
    { rc: require("../img/icon/7.jpg"), label: "Ruled NoteBooks", url: "./ImgNB" },
    { rc: require("../img/icon/8.jpg"), label: "Plain NoteBooks", url: "./ImgNB" },
    { rc: require("../img/icon/9.jpg"), label: "Planners" , url: "./ImgPlanners" },
    { rc: require("../img/icon/12.jpg"), label: "Sticky Notes" , url: "./ImgSticky" },
    { rc: require("../img/icon/10.jpg"), label: "Erasers & Correction" , url: "./ImgEraser" },
    { rc: require("../img/icon/11.jpg"), label: "Calculator" , url: "./ImgCalcs" },
];

const ImgIcon2 = () => {
  const handleClick = (url) => {
    window.open(url, "_blank");
  }
    return (
        <HStack>
        <div className="imgicons">
          {iconData.map((item, index) => (
            <div className="icon" key={index}>
              <Image src={item.rc} borderRadius={"full"} onClick={() => handleClick(item.url)} />
              <h1>{item.label}</h1>
            </div>
          ))}
        </div>
      </HStack>
    )
}

export default ImgIcon2

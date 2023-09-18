import { Image, VStack, HStack } from "@chakra-ui/react";
import React from "react";
// import "../styling/imagestyling.scss";
import ImgIconpage from "./ImgIconpage";
import ImgRollerpen from "./ImgRollerpen";
import ImgPencils from "./ImgPencils";
import ImgFountainpen from "./ImgFountainpen";
import ImgHighlighter from "./ImgHighlighter";


const iconData = [
  { rc: require("../img/icon/1.jpg"), label: "Gel Pen", url: "ImgIconpage" },
  { rc: require("../img/icon/2.jpg"), label: "Roller Pen", url: "./ImgRollerpen"},
  { rc: require("../img/icon/3.jpg"), label: "Fountain Pen", url: "./ImgFountainpen"  },
  { rc: require("../img/icon/4.jpg"), label: "Mechanical Pencil" , url: "./ImgPencils" },
  { rc: require("../img/icon/5.jpg"), label: "HB Pencil" , url: "./ImgPencils" },
  { rc: require("../img/icon/6.jpg"), label: "Highlighters" , url: "./ImgHighlighter" },

  // Add more items as needed
];

const ImgIcon = () => {
  const handleClick = (url) => {
    window.open(url); 
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
  );
};

export default ImgIcon;

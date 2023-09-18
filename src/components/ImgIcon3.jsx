import { Image, VStack, HStack } from "@chakra-ui/react";
import React from "react";
import "../styling/imagestyling.scss";



const iconData = [
  { rc: require("../img/icon/13.jpg"), label: "Fevicols", url: "./ImgFevicols" },
  { rc: require("../img/icon/14.jpg"), label: "Dairy", url: "./ImgPlanners"},
  { rc: require("../img/icon/15.jpg"), label: "Punching hole", url: "./ImgPunching"  },
  { rc: require("../img/icon/16.jpg"), label: "Scissors" , url: "./ImgScissors" },
  { rc: require("../img/icon/17.jpg"), label: "Stepplers" , url: "./ImgSteppler" },
  { rc: require("../img/icon/18.jpg"), label: "Pins" , url: "./ImgPins" },

  // Add more items as needed
];

const ImgIcon3 = () => {
  const handleClick = (url) => {
    window.open(url, "_blank");
  }
  return (
    <HStack>
      <div className="imgicons">
        {iconData.map((item, index) => (
          <div className="icon" key={index}>
            <Image src={item.rc} borderRadius={"full"} onClick={() => handleClick(item.url)} width={'100%'} height={'100%'}/>
            <h1>{item.label}</h1>
          </div>
        ))}
      </div>
    </HStack>
  );
};

export default ImgIcon3;

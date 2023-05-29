import { useState } from "react";

export default function Map(){
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
    
  };


 
  return (
    <div className={`image-piece ${isHovered ? 'hovered' : ''}`}
    onMouseEnter={handleHover}
    onMouseLeave={handleHover}>
    <img src="./pngwing.com.png" alt="singapore"  style={{"display": "block", "marginLeft": "auto", "marginRight": "auto", "width": "40%"}}>


    </img>
    </div>
  )

  
}
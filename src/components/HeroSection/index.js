import React,{ useState } from "react";
import videosrc from "../../videos/tech.mp4";
import {
  HeroContainer,
  HeroContent,
  Heroh1,
  HeroBtn,
  BtnRoute,
  HeroDesc,
  ForwardIcon,
  Imp,
} from "./heroElements";

const HeroSection = () => {

    const [hover,setHover] = useState(false);

    const toggleIcon = () => {
        setHover(!hover);
    }

  return (
    <>
      <HeroContainer>
        <HeroContent>
          <Heroh1>
            Explore the <Imp>VR</Imp> games{" "}
          </Heroh1>
          <HeroDesc>
            Buy first vr game and get $25 credit in your account
          </HeroDesc>
          <BtnRoute>
            <HeroBtn to="/signin" onMouseEnter={toggleIcon} onMouseLeave={toggleIcon}>Get Started {hover ? <ForwardIcon className="arr-icon" /> : null} </HeroBtn>
          </BtnRoute>
        </HeroContent>
      </HeroContainer>
    </>
  );
};

export default HeroSection;

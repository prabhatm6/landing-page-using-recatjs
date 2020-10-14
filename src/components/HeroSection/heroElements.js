import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import vr from "../../images/vr.jpg";

export const HeroContainer = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url(${vr});
  background-position: center;
  background-size: cover;
  background-repeat:no-repeat
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
  justify-content: center;
`;

const animeHeroh1 = keyframes`
    from{
        transform: scale(1.1) translateY(120px);
        opacity:0;
    }
    to{
        transform: scale(1) translateY(0px);
        opacity:1;
    }
`;

const animeHerop = keyframes`
    from{
        transform: scale(.6);
        opacity:0;
    }
    to{
        transform: scale(1) translateY(0px);
        opacity:1;
`;

export const Heroh1 = styled.h1`
  font-size: 44px;
  color: #fff;
  font-weight: bold;
  transition: all 0.3s;
  transform: skewX(0deg);

  @media screen and (max-width: 769px) {
    font-size: 32px;
  }
  @media screen and (max-width: 400px) {
    font-size: 22px;
  }
  @media screen and (max-width: 300px) {
    font-size: 20px;
  }

  & span {
    @media screen and (max-width: 769px) {
      font-size: 34px;
    }
    @media screen and (max-width: 400px) {
      font-size: 28px;
    }
    @media screen and (max-width: 300px) {
      font-size: 20px;
    }
  }

  &:hover {
    transform: skewX(-20deg);
  }

  &:hover span {
    color: #ff304f;
  }
`;

export const Imp = styled.span`
  font-size: 44px;
  color: #fff;
  font-weight: bold;
  transition: all 0.3s;
`;
export const HeroDesc = styled.p`
  text-align: center;
  width: 450px;
  font-size: 24px;
  color: #fff;
  margin-top: 10px;
  animation: ${animeHerop} 0.6s forwards ease-in;

  @media screen and (max-width: 769px) {
    width: 300px;
    font-size: 20px;
  }
  @media screen and (max-width: 400px) {
    width: 250px;
    font-size: 17px;
  }
  @media screen and (max-width: 300px) {
    width: 230px;
    font-size: 14px;
  }
`;
export const BtnRoute = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  position: relative;
  text-align: center;
`;

const move = keyframes`
from {
      left: 75%;
      opacity: 0.2;
    }
    to {
      left: 78%;
      opacity: 1;
    }
`;

export const ForwardIcon = styled(FaArrowRight)`
  position: absolute;
  color: #fff;
  top: 17.5px;
  left: 75%;
  margin-left: 5px;
  opacity: 0;
  font-size: 13px;
`;

export const HeroBtn = styled(Link)`
  color: #000;
  font-size: 16px;
  padding: 15px 35px;
  color: #fff;
  border-radius: 50px;
  border: none;
  outline: none;
  transition: all 0.3s;
  cursor: pointer;
  background-image: linear-gradient(
    to right,
    rgb(142, 45, 226),
    rgb(74, 0, 224)
  );
  margin-left: 20px;
  &:hover {
    opacity: 1;
    background-image: linear-gradient(
      to right,
      rgb(211, 204, 227),
      rgb(233, 228, 240)
    );
    color: #000;
  }
  animation: ${animeHeroh1} 0.6s forwards ease-in;
  &:hover .arr-icon {
    animation: ${move} 0.2s forwards 0.3s ease-in-out;
    color: #000;
  }
`;

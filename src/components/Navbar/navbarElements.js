import styled from "styled-components";
import { BiLink, BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.div`
  position: sticky;
  top: 0;
  height: 60px;
  background-color: ${({ active }) => (active ? "#000" : "transparent")};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  margin-top: -60px;
`;

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
`;

export const NavbarMenu = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 550px;
  @media screen and (max-width: 769px) {
    display: ${({ active }) => (active ? "flex" : "none")};

    width: 100%;
    height: 100vh;
    position: absolute;
    top: 50px;
    justify-content: start;
    align-items: center;
    z-index: -999;
    flex-direction: column;
    background-color: #000;
    color: #000;
  }
`;

export const HamburgerWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  display: none;
  cursor: pointer;
  color: #fff;
  font-size: 30px;
  @media screen and (max-width: 769px) {
    display: flex;
  }
`;

// export const Hamburger = styled(GoThreeBars)`
//   color: #fff;
//   font-size: 30px;
// `;

export const NavLogo = styled(Link)`
  font-size: 38px;
  color: #dee1ec;
  font-weight: bolder;

  @media screen and (max-width: 769px) {
    font-size: 34px;
  }
`;

export const NavbarSearch = styled.div`
  position: relative;
  width: 450px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1100px) {
    display: ${({ active }) => (active ? "flex" : "none")};
    height:100%;
    position: ${({ active }) => (active ? "absolute" : "relative")};
    top:400px;
  }
`;

export const SearchLogo = styled(BiSearch)`
  color: #000;
  position: absolute;
  left: 55px;
  font-size: 18px;
`;
export const SearchInput = styled.input`
  width: 80%;
  padding: 8px 35px;
  font-size: 17px;
  border-radius: 18px;
  outline: none;
  border: 1px solid #000;
`;

export const NavbarItem = styled.li`
  position: relative;
  height: 60px;
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  z-index: 10;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    top: -100%;
    left: 0;
    height: 60px;
    width: 100%;
    background-image: linear-gradient(
      to right,
      rgb(168, 192, 255),
      rgb(63, 43, 150)
    );
    transition: all 0.4s ease-in-out;

    @media screen and (max-width: 769px) {
      display: none;
    }
  }

  &:hover::before {
    top: 0;
  }
  &:hover a {
    color: #fff;
  }
`;

export const NavLink = styled(Link)`
  font-size: 20px;
  color: #dee1ec;
  font-weight: 500;
  z-index: 20;
  transition: color 0.7s;
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  color: #000;
  font-size: 16px;
  padding: 10px 28px;
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
  opacity: 0.8;
  margin-left: 20px;
  &:hover {
    opacity: 1;
  }
`;

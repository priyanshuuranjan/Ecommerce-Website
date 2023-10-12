import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <MainHeader>
      {/* Navlink -->> it is just like <a href="#"></a> but ye page ko reload nhi krene deta hai or ye react router dom se imported hai  */}
      <NavLink to="/">
        {/* <img src="./images/logos.png" alt="my logo img" /> */}
      </NavLink>
      <Nav />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .logo {
    height: 5rem;
  }
`;
export default Header;

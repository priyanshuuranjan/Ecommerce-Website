import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FiShoppingCart } from "react-icons/fi";
import { CgMenu, CgClose } from "react-icons/cg";
import { useSelector } from "react-redux";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const Nav = () => {
  const [menuIcon, setMenuIcon] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const getdata = useSelector((state) => state.cartreducer.carts);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
   <Nav>
     <NavContainer>
      <MobileMenuButton onClick={() => setMenuIcon(!menuIcon)}>
        {menuIcon ? <CgClose /> : <CgMenu />}
      </MobileMenuButton>
      <MenuLinks className={menuIcon ? "active" : ""}>
      <ul className="navbar-lists">
          <li>
            <NavLink
              to="/"
              className="navbar-link "
              onClick={() => setMenuIcon(true)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="navbar-link "
              onClick={() => setMenuIcon(true)}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className="navbar-link "
              onClick={() => setMenuIcon(true)}
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="navbar-link "
              onClick={() => setMenuIcon(true)}
            >
              Contact
            </NavLink>
          </li>
        <li>
        <NavLink to="" className="navbar-link cart-trolley--link">
          <CartLink onClick={handleClick}>
            <FiShoppingCart className="cart-trolley" />
            <span >
              {getdata.length}
            </span>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem>Empty</MenuItem>
            </Menu>
          </CartLink>
        </li>
        <ul/>
      </MenuLinks>
    </NavContainer>
   </Nav>
  );
};

const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const MobileMenuButton = styled.button`
  display: none;
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.6rem;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MenuLinks = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 60px;
  left: 0;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  visibility: hidden;
  opacity: 0;
  transform: translateX(-20px);
  transition: all 0.3s ease;
  z-index: 1;

  &.active {
    visibility: visible;
    opacity: 1;
    transform: translateX(0);
  }

  li {
    margin-bottom: 10px;

    a {
      text-decoration: none;
      color: #333;
      font-size: 1.6rem;

      &:hover {
        color: #007bff;
      }
    }
  }
`;
const CartLink = styled.div`
  display: flex;
  align-items: center;
  span {
    margin-left: 10px;
  }
`;

export default Nav;


/*
// ye work kr rha hai 



import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FiShoppingCart } from "react-icons/fi";
import { CgMenu, CgClose } from "react-icons/cg";
import { useSelector } from "react-redux";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const getdata = useSelector((state) => state.cartreducer.carts);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <NavContainer>
      <MobileMenuButton onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <CgClose /> : <CgMenu />}
      </MobileMenuButton>
      <MenuLinks className={menuOpen ? "active" : ""}>
        <li>
          <NavLink to="/" onClick={() => setMenuOpen(false)}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={() => setMenuOpen(false)}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/products" onClick={() => setMenuOpen(false)}>
            Products
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </NavLink>
        </li>
        <li>
          <CartLink onClick={handleClick}>
            <FiShoppingCart className="cart-trolley" />
            <span>
              {getdata.length}
            </span>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem>Empty</MenuItem>
            </Menu>
          </CartLink>
        </li>
      </MenuLinks>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const MobileMenuButton = styled.button`
  display: none;
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.6rem;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MenuLinks = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 60px;
  left: 0;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  visibility: hidden;
  opacity: 0;
  transform: translateX(-20px);
  transition: all 0.3s ease;
  z-index: 1;

  &.active {
    visibility: visible;
    opacity: 1;
    transform: translateX(0);
  }

  li {
    margin-bottom: 10px;

    a {
      text-decoration: none;
      color: #333;
      font-size: 1.6rem;

      &:hover {
        color: #007bff;
      }
    }
  }
`;

const CartLink = styled.div`
  display: flex;
  align-items: center;
  span {
    margin-left: 10px;
  }
`;

export default Nav;



*/

/*
// ye work kr rha hai 



import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FiShoppingCart } from "react-icons/fi";
import { CgMenu, CgClose } from "react-icons/cg";
import { useSelector } from "react-redux";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const getdata = useSelector((state) => state.cartreducer.carts);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <NavContainer>
      <MobileMenuButton onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <CgClose /> : <CgMenu />}
      </MobileMenuButton>
      <MenuLinks className={menuOpen ? "active" : ""}>
        <li>
          <NavLink to="/" onClick={() => setMenuOpen(false)}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={() => setMenuOpen(false)}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/products" onClick={() => setMenuOpen(false)}>
            Products
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </NavLink>
        </li>
        <li>
          <CartLink onClick={handleClick}>
            <FiShoppingCart className="cart-trolley" />
            <span>
              {getdata.length}
            </span>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem>Empty</MenuItem>
            </Menu>
          </CartLink>
        </li>
      </MenuLinks>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const MobileMenuButton = styled.button`
  display: none;
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.6rem;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MenuLinks = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 60px;
  left: 0;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  visibility: hidden;
  opacity: 0;
  transform: translateX(-20px);
  transition: all 0.3s ease;
  z-index: 1;

  &.active {
    visibility: visible;
    opacity: 1;
    transform: translateX(0);
  }

  li {
    margin-bottom: 10px;

    a {
      text-decoration: none;
      color: #333;
      font-size: 1.6rem;

      &:hover {
        color: #007bff;
      }
    }
  }
`;

const CartLink = styled.div`
  display: flex;
  align-items: center;
  span {
    margin-left: 10px;
  }
`;

export default Nav;



*/
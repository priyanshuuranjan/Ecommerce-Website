import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FiShoppingCart } from "react-icons/fi";
import { CgMenu, CgClose } from "react-icons/cg";
import { DLT } from "../redux/actions/action";
import { useDispatch, useSelector } from "react-redux";
import Table from "react-bootstrap/esm/Table";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const Nav = () => {
  const [menuIcon, setMenuIcon] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const [price, setPrice] = useState(0);
  // console.log(price);

  const getdata = useSelector((state) => state.cartreducer.carts);
  console.log(getdata);

  const dispatch = useDispatch();

  // working on card menu when we add any item then it show that particular items

  const Nav = styled.nav`
    .navbar-lists {
      display: flex;
      gap: 4.8rem;
      align-items: center;
      z-index: 9999;

      .navbar-link {
        &:link,
        &:visited {
          display: inline-block;
          text-decoration: none;
          font-size: 1.8rem;
          font-weight: 500;
          text-transform: uppercase;
          color: ${({ theme }) => theme.colors.black};
          transition: color 0.3s linear;
        }

        &:hover,
        &:active {
          color: ${({ theme }) => theme.colors.helper};
        }
      }
    }

    // side navbar code
    .cart-sidebar {
      position: fixed;
      top: 0;
      right: 0;
      width: 300px;
      height: 100%;
      background: #fff; /* Background color for the cart sidebar */
      box-shadow: -2px 0px 5px rgba(0, 0, 0, 0.2); /* Add shadow for a better appearance */
      z-index: 1000;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 20px;
    }

    .cart-close-button {
      position: absolute;
      top: 10px;
      right: 10px;
      background: none;
      border: none;
      font-size: 24px;
      cursor: pointer;
      color: #333; /* Color for the close button */
    }

    .cart-close-button:hover {
      color: #ff0000; /* Change color on hover if desired */
    }

    .cart-sidebar p {
      font-size: 22px;
      margin-bottom: 10px;
      text-align: center;
    }

    .emptycart_img {
      width: 100%;
      max-width: 300px; /* Adjust the maximum width as needed */
      padding: 10px;
    }

    /* Styling for the cart icon and item count */
    .cart-trolley--link {
      position: relative;
      display: flex;
      align-items: center;
      cursor: pointer;
      text-decoration: none;
      color: #333; /* Color for the cart icon */
    }

    /* getdata.length size */
    .cart-item-count {
      font-size: 20px; /* Adjust the font size as needed */
      font-weight: bold; /* To make it bold as per your previous request */
    }

    .cart-trolley {
      font-size: 30px; /* Adjust the size as needed */
      margin-right: 10px;
    }

    .cart-total--item {
      width: 24px;
      height: 24px;
      position: absolute;
      background-color: #ff0000; /* Background color for the item count circle */
      color: #fff; /* Text color for the item count */
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      top: 0;
      right: 0;
      font-size: 14px; /* Adjust the font size as needed */
    }

    .mobile-navbar-btn {
      display: none;
      background-color: transparent;
      cursor: pointer;
      border: none;
    }

    .mobile-nav-icon[name="close-outline"] {
      display: none;
    }

    .close-outline {
      display: none;
    }

    .cart-trolley--link {
      position: relative;

      .cart-trolley {
        position: relative;
        font-size: 3.2rem;
      }

      .cart-total--item {
        width: 2.4rem;
        height: 2.4rem;
        position: absolute;
        background-color: #000;
        color: #000;
        border-radius: 50%;
        display: grid;
        place-items: center;
        top: -20%;
        left: 70%;
        background-color: ${({ theme }) => theme.colors.helper};
      }
    }

    .user-login--name {
      text-transform: capitalize;
    }

    .user-logout,
    .user-login {
      font-size: 1.4rem;
      padding: 0.8rem 1.4rem;
    }

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      .mobile-navbar-btn {
        display: inline-block;
        z-index: 9999;
        border: ${({ theme }) => theme.colors.black};

        .mobile-nav-icon {
          font-size: 4.2rem;
          color: ${({ theme }) => theme.colors.black};
        }
      }

      .active .mobile-nav-icon {
        display: none;
        font-size: 4.2rem;
        position: absolute;
        top: 30%;
        right: 10%;
        color: ${({ theme }) => theme.colors.black};
        z-index: 9999;
      }

      .active .close-outline {
        display: inline-block;
      }

      .navbar-lists {
        width: 100%;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #fff;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        visibility: hidden;
        opacity: 0;
        transform: translateX(100%);
        /* transform-origin: top; */
        transition: all 3s linear;
      }

      .active .navbar-lists {
        visibility: visible;
        opacity: 1;
        transform: translateX(0);
        z-index: 9999;
        transform-origin: left;
        transition: all 3s linear;

        .navbar-link {
          font-size: 4.2rem;
        }
      }
      .cart-trolley--link {
        position: relative;

        .cart-trolley {
          position: relative;
          font-size: 5.2rem;
        }

        .cart-total--item {
          width: 4.2rem;
          height: 4.2rem;
          font-size: 2rem;
        }
      }

      .user-logout,
      .user-login {
        font-size: 2.2rem;
        padding: 0.8rem 1.4rem;
      }
    }
  `;

  return (
    <Nav>
      <div className={menuIcon ? " active" : "navbar"}>
        <ul className="navbar-lists">
          <li>
            <NavLink
              to="/"
              className="navbar-link "
              onClick={() => setMenuIcon(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="navbar-link "
              onClick={() => setMenuIcon(false)}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className="navbar-link "
              onClick={() => setMenuIcon(false)}
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="navbar-link "
              onClick={() => setMenuIcon(false)}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <div
              className="navbar-link cart-trolley--link"
              onClick={() => setIsCartOpen(!isCartOpen)}
              style={{ cursor: "pointer" }}
            >
              <FiShoppingCart className="cart-trolley" />
              <span className="cart-item-count">{getdata.length}</span>
            </div>
            {isCartOpen && (
              <div className="cart-sidebar">
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="cart-close-button"
                >
                  &#10006; {/* This is the cross (X) symbol */}
                </button>
                <p style={{ fontSize: 22 }}>Your cart is empty</p>
                <img
                  src="./images/giphy.gif"
                  alt="cart gif"
                  className="emptycart_img"
                  style={{ width: "30rem" }}
                />
              </div>
            )}
          </li>
        </ul>

        {/* Two buttons for open and close of menu */}
        <div className="mobile-navbar-btn">
          <CgMenu
            name="menu-outline"
            className="mobile-nav-icon"
            onClick={() => setMenuIcon(true)}
          />
          <CgClose
            name="close-outline"
            className="mobile-nav-icon close-outline"
            onClick={() => setMenuIcon(false)}
          />
        </div>
      </div>
    </Nav>
  );
};

export default Nav;

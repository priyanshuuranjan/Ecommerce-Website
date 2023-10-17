import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FiShoppingCart } from "react-icons/fi";
import { CgMenu, CgClose } from "react-icons/cg";
import { DLT } from "../redux/actions/action";
import { useDispatch, useSelector } from "react-redux";
import Table from "react-bootstrap/esm/Table";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
// import "./style.css";

const Nav = () => {
  const [menuIcon, setMenuIcon] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const [price, setPrice] = useState(0);
  // console.log(price);

  const getdata = useSelector((state) => state.cartreducer.carts);
  console.log(getdata);

  const dispatch = useDispatch();

  const dlt = (id) => {
    dispatch(DLT(id));
  };

  const total = () => {
    let price = 0;
    getdata.map((ele, k) => {
      price = ele.price * ele.qnty + price;
    });
    setPrice(price);
  };

  useEffect(() => {
    total();
  }, [total]);

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

    //! side bar cart  code........

    .cart-table-header {
      margin-right: 20px; /* Adjust the margin value as needed */
    }

    .cart-sidebar {
      position: fixed;
      top: 0;
      right: 0;
      width: 350px;
      height: 100%;
      background: #fff;
      box-shadow: -2px 0px 5px rgba(0, 0, 0, 0.2);
      z-index: 1000;
      display: flex;
      flex-direction: column;
      align-items: flex-start; /* Change to align items to the left */
      padding: 20px;
    }

    .cart-close-button {
      position: absolute;
      top: 10px;
      right: 10px;
      background: none;
      border: 2px solid red;
      font-size: 24px;
      cursor: pointer;
      color: #333; /* Color for the close button */
    }

    .cart-close-button:hover {
      color: #ff0000; /* Change color on hover if desired */
    }

    .cart-sidebar p {
      font-size: 17px; // cart size variable
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
      <div className={menuIcon ? "active" : "navbar"}>
        <ul className="navbar-lists">
          <li>
            <NavLink
              to="/"
              className="navbar-link"
              onClick={() => setMenuIcon(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="navbar-link"
              onClick={() => setMenuIcon(false)}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className="navbar-link"
              onClick={() => setMenuIcon(false)}
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="navbar-link"
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
                  &#10006;
                </button>

                {getdata.length > 0 ? (
                  <div
                    className="card-details"
                    style={{ width: "24rem", padding: 10 }}
                  >
                    <Table>
                      <thead>
                        <tr style={{ fontSize: 17 }}>
                          <th className="cart-table-header">Photo</th>
                          <th className="cart-table-header">Product</th>
                        </tr>
                      </thead>
                      <tbody>
                        {getdata.map((item) => (
                          <tr key={item.id}>
                            <td>
                              <NavLink to={`/cart/${item.id}`}>
                                <img
                                  src={item.imgdata}
                                  style={{ width: "7rem", height: "7rem" }}
                                  alt=""
                                />
                              </NavLink>
                            </td>
                            <td>
                              <p>{item.name}</p>
                              <p>Price: ₹{item.price}</p>
                              <p>Quantity: {item.qnty}</p>
                              <p
                                style={{
                                  color: "red",
                                  fontSize: 20,
                                  cursor: "pointer",
                                }}
                                onClick={() => dlt(item.id)}
                              >
                                <i className="fas fa-trash smalltrash"></i>
                              </p>
                            </td>
                            <td
                              className="mt-5"
                              style={{
                                color: "red",
                                fontSize: 20,
                                cursor: "pointer",
                              }}
                              onClick={() => dlt(item.id)}
                            >
                              <i className="fas fa-trash largetrash"></i>
                            </td>
                          </tr>
                        ))}
                        <p className="text-center">Total: ₹ {price}</p>
                      </tbody>
                    </Table>
                  </div>
                ) : (
                  <div
                    className="card_details d-flex justify-content-center align-items-center"
                    style={{
                      width: "24rem",
                      padding: 10,
                      position: "relative",
                    }}
                  >
                    <i
                      className="fas fa-close smallclose"
                      style={{
                        position: "absolute",
                        top: 2,
                        right: 20,
                        fontSize: 23,
                        cursor: "pointer",
                      }}
                    ></i>
                    <p style={{ fontSize: 22 }}>Your carts is empty</p>
                    <img
                      src="./cart.gif"
                      alt=""
                      className="emptycart_img"
                      style={{ width: "5rem", padding: 10 }}
                    />
                  </div>
                )}
              </div>
            )}
          </li>
        </ul>

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

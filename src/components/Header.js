import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";
import { DLT } from '../redux/actions/action';
import { useDispatch, useSelector } from 'react-redux';


const Header = () => {

  const [price,setPrice] = useState(0);
    // console.log(price);

        const getdata = useSelector((state)=> state.cartreducer.carts);
        console.log(getdata);

        const dispatch = useDispatch();

 
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

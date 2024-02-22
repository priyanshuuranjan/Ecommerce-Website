import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";
import { useState, useEffect } from "react";

const HeroSection = ({ myData }) => {
  const { name } = myData;

  const images = [
    "https://media3.giphy.com/media/3o7btNUijQYS0WAcwg/giphy.webp?cid=790b76118pfswxxvce2v3qpehhimx6h9bkocbx9ge2z5p9nc&ep=v1_gifs_search&rid=giphy.webp&ct=g",
    "https://media1.giphy.com/media/l1J3qfEz3nmxWL4Vq/giphy.webp?cid=ecf05e47yvphraz43rvcxllml5ota1y67gnlgqriavwd38wf&ep=v1_gifs_search&rid=giphy.webp&ct=g",
    "https://media4.giphy.com/media/3oEjHOUcNRKgpqTHiM/giphy.webp?cid=ecf05e47r3sc40pj7b3097usccmzl3wmtmfa6js6twy8ld07&ep=v1_gifs_search&rid=giphy.webp&ct=g",
    "https://media4.giphy.com/media/De6pVg0gDX82safJ0w/giphy.webp?cid=790b76118xuyjy8xuvmeojpzo0hgaq1o6q2od7a5udnxyml1&ep=v1_gifs_search&rid=giphy.webp&ct=g",
    "https://www.ugaoo.com/cdn/shop/files/Subscription_Stop_Motion.gif?v=1666090774&width=750",
    "https://media0.giphy.com/media/nzyOtzTLP8Htb7aD1R/giphy.webp?cid=ecf05e47sptq28lnf6mdwk2ttk58iiz3b7ex66lfpw2ci9j1&ep=v1_gifs_search&rid=giphy.webp&ct=g",
    "https://media3.giphy.com/media/IUgHetqwLuMOle17DC/giphy.webp?cid=790b76114uprl08e1dbc935kz27px9yfcffeinrq76ixzr1c&ep=v1_gifs_search&rid=giphy.webp&ct=g",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Increment currentImageIndex, and loop back to 0 if it exceeds the length of images array
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []); // Empty dependency array to run only once on component mount

  return (
    <Wrapper>
      <div className="container">
        <div className="grid grid-two-column">
          <div className="hero-section-data">
            <p className="intro-data">Welcome to </p>
            <h1> {name} </h1>
            <p>
              As India's premier online agri shop, we provide everything you
              need for successful farming from high-quality seeds, fertilizers,
              and pesticides to plant growth regulators, irrigation solutions,
              and cutting-edge farming tools. Our commitment lies in offering
              you the market's best prices, along with dedicated customer
              support to ensure your farming endeavors thrive. Explore our
              extensive range and experience the difference with{" "}
              <b>Kumar Fertilizer Pvt Ltd.</b>
            </p>
            <NavLink>
              <Button>shop now</Button>
            </NavLink>
          </div>

          <div className="hero-section-image">
            <figure>
              <img
                src={images[currentImageIndex]}
                alt="hero-section-photo"
                className="img-style"
              />
            </figure>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 12rem 0;

  img {
    min-width: 10rem;
    height: 10rem;
  }

  .hero-section-data {
    p {
      margin: 2rem 0;
    }

    h1 {
      text-transform: capitalize;
      font-weight: bold;
    }

    .intro-data {
      margin-bottom: 0;
    }
  }

  .hero-section-image {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  figure {
    position: relative;

    &::after {
      content: "";
      width: 60%;
      height: 80%;
      background-color: rgba(81, 56, 238, 0.4);
      position: absolute;
      left: 50%;
      top: -5rem;
      z-index: -1;
    }
  }
  .img-style {
    width: 100%;
    height: auto;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 10rem;
    }

    figure::after {
      content: "";
      width: 50%;
      height: 100%;
      left: 0;
      top: 10%;
      /* bottom: 10%; */
      background-color: rgba(81, 56, 238, 0.4);
    }
  }
`;

export default HeroSection;

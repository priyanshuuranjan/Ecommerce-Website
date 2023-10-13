import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'
import { useNavigate, useParams } from 'react-router-dom'
// import { useDispatch, useSelector } from 'react-redux'
// import { DLT,ADD,REMOVE } from '../redux/actions/action'


const ProductDetail = () => {
 
  const [data,setData] = useState([]);
  // console.log(data);

  const {id} = useParams();
  // console.log(id);

  // const history = useNavigate();

  // const dispatch = useDispatch();

  
//   const getdata = useSelector((state)=> state.cartreducer.carts);
//   // console.log(getdata);


//   const compare = ()=>{
//     let comparedata = getdata.filter((e)=>{
//       return e.id == id
//     });
//     setData(comparedata);
//   }

//   // add data
  

//   const send = (e)=>{
//     // console.log(e);
//     dispatch(ADD(e));
//   }
  
//   const dlt = (id)=>{
//     dispatch(DLT(id));
//     history("/");
// }

// // remove one
// const remove = (item)=>{
//   dispatch(REMOVE(item))
// }


//   useEffect(()=>{
//     compare();
//   },[id])

  return (
    <>
      <div className="container mt-2">
        <h2 className='text-center'>Iteams Details Page
        </h2>

        <section className='container mt-3'>
          <div className="iteamsdetails">
          {
            data.map((ele)=>{
              return (
                <>
                <div className="items_img">
              <img src={ele.imgdata} alt="" />
            </div>

            <div className="details">
              <Table>
                <tr>
                  <td>
                    <p> <strong>Restaurant</strong>  : {ele.rname}</p>
                    <p> <strong>Price</strong>  : ₹{ele.price}</p>
                    <p> <strong>Dishes</strong>  : {ele.address}</p>
                    <p> <strong>Total</strong>  :₹  {ele.price * ele.qnty}</p>
                    <div className='mt-5 d-flex justify-content-between align-items-center' style={{width:100,cursor:"pointer",background:"#ddd",color:"#111"}}>
                    {/* <span style={{fontSize:24}} onClick={ele.qnty <=1 ? ()=>dlt(ele.id) : ()=>remove(ele)}>-</span>
                    <span style={{fontSize:22}}>{ele.qnty}</span>
                    <span style={{fontSize:24}} onClick={()=>send(ele)}>+</span> */}

                    </div>

                  </td>
                  <td>
                    <p><strong>Rating :</strong> <span style={{background:"green",color:"#fff",padding:"2px 5px",borderRadius:"5px"}}>{ele.rating} ★	</span></p>
                    <p><strong>Order Review :</strong> <span >{ele.somedata}	</span></p>
                    <p><strong>Remove :</strong> <span ><i className='fas fa-trash' style={{color:"red",fontSize:20,cursor:"pointer"}}></i>	</span></p>
                  </td>
                </tr>
              </Table>
            </div>
          
                </>
              )
            })
          }
          </div>
        </section>
      </div>
    </>
  )
}

export default ProductDetail



// phle wala code hai 

// import React, { useState } from "react";
// import styled from "styled-components";
// import Cardsdata from "./CardsData";
// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
// import "./style.css"
// const Fertilizer = () => {
//   const [data, setData] = useState(Cardsdata);
//   console.log(data);
//   return (
//     <Wrapper className="section">
//       <div className="container ">
//         <div className="intro-data">Check Now!</div>
//         <div className="common-heading">Our Feature Services</div>
//         <div className="grid grid-three-column">
//           {data.map((element, id) => {
//             return (
//               <Card style={{ width: '22rem',border:"none" }} className="mx-2 mt-4 card_style">
//               <Card.Img variant="top" src={element.imgdata} style={{height:"16rem"}} className="mt-3" />
//                 <Card.Body>
//                 <Card.Title>{element.rname}</Card.Title>
//                 <Card.Text>
//                     Price : ₹ {element.price}
//                     </Card.Text>
//                     <div className="button_div d-flex justify-content-center">
//                     <Button variant="primary"  
//                       // onClick={()=> send(element)}
//                      className='col-lg-12'>Add to Cart</Button>
//                     </div>
//                 </Card.Body>
//               </Card>
//             );
//           })}
//         </div>
//       </div>
//     </Wrapper>
//   );
// };

// const Wrapper = styled.section`
//   padding: 9rem 0;
//   // background-color: ${({ theme }) => theme.colors.bg};

//   .container {
//     max-width: 120rem;
//   }

//   figure {
//     width: auto;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     position: relative;
//     overflow: hidden;
//     transition: all 0.5s linear;
//     &::after {
//       content: "";
//       position: absolute;
//       top: 0;
//       left: 0;
//       width: 0%;
//       height: 100%;
//       background-color: rgba(0, 0, 0, 0.5);
//       transition: all 0.2s linear;
//       cursor: pointer;
//     }
//     &:hover::after {
//       width: 100%;
//     }
//     &:hover img {
//       transform: scale(1.2);
//     }
//     img {
//       max-width: 90%;
//       margin-top: 1.5rem;
//       height: 20rem;
//       transition: all 0.2s linear;
//     }

//     .caption {
//       position: absolute;
//       top: 15%;
//       right: 10%;
//       text-transform: uppercase;
//       background-color: ${({ theme }) => theme.colors.bg};
//       padding: 0.8rem 2rem;
//       font-size: 1.2rem;
//       border-radius: 2rem;
//     }
//   }

//   .card {
//     background-color: #fff;
//     border-radius: 1rem;

//     .card-data {
//       padding: 0 2rem;
//     }

//     .card-data-flex {
//       margin: 2rem 0;
//       display: flex;
//       justify-content: space-between;
//       align-items: center;
//     }

//     h3 {
//       color: ${({ theme }) => theme.colors.text};
//       text-transform: capitalize;
//     }

//     .card-data--price {
//       color: ${({ theme }) => theme.colors.helper};
//     }

//     .btn {
//       margin: 2rem auto;

//       border: 0.1rem solid rgb(98 84 243);
//       display: flex;
//       justify-content: center;
//       align-items: center;

//       &:hover {
//         background-color: rgb(98 84 243);
//       }

//       &:hover a {
//         color: #fff;
//       }
//       a {
//         color: rgb(98 84 243);
//         font-size: 1.4rem;
//       }
//     }
//   }
// `;

// export default Fertilizer;

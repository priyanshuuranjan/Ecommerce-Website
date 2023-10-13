import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import "./style.css";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const ProductDetail = () => {
  const [data, setData] = useState([]);
  return (
    <>
      <div className="container mt-2">
        <h2 className="text-center">Iteams Details Page</h2>

        <section className="container mt-3">
          <div className="iteamsdetails">
            <div className="items_img">
              <img src="/images/seed.jpg" alt="" />
            </div>
            <div className="details ">
              <Table>
                <tr>
                  <td>
                  <p> <strong>Restaurant</strong>  : Km fertilizer </p>
                    <p> <strong>Price</strong>  : ₹105</p>
                    <p> <strong>Dishes</strong>  : Dap </p>
                    <p> <strong>Total</strong>  :₹ 400 </p>
                  </td>
                  <td>
                    <p><strong>Rating :</strong> <span style={{background:"green",color:"#fff",padding:"2px 5px",borderRadius:"5px"}}> 4.5★	</span></p>
                    <p><strong>Order Review :</strong> <span >	</span></p>
                    <p><strong>Remove :</strong> <span ><i className='fas fa-trash'  style={{color:"red",fontSize:20,cursor:"pointer"}}></i>	</span></p>
                  </td>
                </tr>
              </Table>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default ProductDetail;

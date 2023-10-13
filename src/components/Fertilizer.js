import React, { useState } from "react";
import Cardsdata from "./CardsData";

const Fertilizer = () => {
  const [data, setData] = useState(Cardsdata);
  console.log(data);
  return <div>Fertilizer</div>;
};
export default Fertilizer;

import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import axios from "../api";
import cafee from "../imgs/cafe.svg";
import prueba from "../imgs/prueba.svg";
import TableComponent from "./TableComponent";

// import books from "../assets/books.png"; 
// import axios from "../api";

export default function HomePage() {
    const [cafe, setCafe] = useState([]);//
    const [selected, setSelected] = useState(null);//

  // useEffect(() => {
  //   const setCafe = async () => {//
  //     try {
  //       const res = await axios.get("");//
  //       setCafe(res.data);//
  //     } catch (err) {
  //       alert("Error");
  //     }
  //   };
  //   setCafe();
  // }, []);

  const showDetail = async (id) => {
    const res = await axios.get(`cafe/${id}`);
    setSelected(res.data);
  }; //

  return (
    <div className="flex flex-wrap justify-center items-start w-screen h-screen p-8">
       {/* image */}
       <div className="w-">
          <h1 className="">El aroma mágico</h1>
        <img src={cafee} alt="cafe" className="h-[250px]" />
        </div>
      {/* grilla */}
      <div className="flex justify-center gap-4 justify-center items-center w-3/4">
      <TableComponent data={cafe} showDetail={showDetail} />
      
      </div>
      {/* detalle */}
      <div className="flex flex-1  gap-y-2 justify-center items-start bg-[#]">
      <div className="flex flex-col bg-[#F9F1F1] items-center w-60">
          <>
            <h1 className="font-medium text-2xl">{selected?.slogan}</h1>
            <hr />
            <h1 className="font-medium text-lg"> {selected?.fecha}</h1>
            <img src={prueba/*selected?.image*/} alt="card img" />
            <h1 className="font-medium text-lg">
              notas: {selected?.notas}
            </h1>
            <h1 className="font-medium text-lg">
              Cultivado a una altura de {selected?.altura} msmn
            </h1>
          </>
      </div>
      
      </div>
    </div>
  );  
}

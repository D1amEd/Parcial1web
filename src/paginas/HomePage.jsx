import React, { useState } from "react";
import { useEffect } from "react";
import { FormattedMessage } from "react-intl";
import Contact from "../components/Contact";
import axios from "../api";
import Header from "../components/Header";

function changeDate(dateString, language=navigator.language) {
  console.log(dateString)
  const dateParts = dateString.split('-');
  const [year, month, day] = dateParts.map(Number); //El formato de la fecha es YYYY-MM-DD
  const date = new Date(year, month - 1, day); // mes basado en 0 en JS

 if (language === 'en') { //numeric is a number, long is the entire string
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  }
  else{
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('es-ES', options);
  }
}

export default function HomePage({ language}) {
  const [cafes, setCafes] = useState([]); //
  const [selected, setSelected] = useState(null); //

  useEffect(() => {
    const fetchCafes = async () => {
      //
      try {
        const res = await axios.get("/cafes"); //
        setCafes(res.data); //
      } catch (err) {
        alert("error")
      }
    };
    fetchCafes();
  }, []);

  const handleClick = async (id) => {
    const res = await axios.get(`/cafes/${id}`);
    setSelected(res.data);
  };

  return (
    <div className="flex flex-col justify-center items-start w-full p-8">
      <Header />

      <br />

      <div className="flex flex-col lg:flex-row justify-center items-center lg:justify-between lg:items-start gap-10 w-full mb-8">
        {/* tabla */}
        <table className="table-auto flex-1 min-w-[400px]">
          <thead className="bg-[rgb(51,58,64)] text-white font-medium h-12">
            <tr>
              <th className="px-5">#</th>
              <th className="px-5">
                <FormattedMessage id="CName" />
              </th>
              <th className="px-5">
                <FormattedMessage id="CType" />
              </th>
              <th className="px-5">
                <FormattedMessage id="CRegion" />
              </th>
            </tr>
          </thead>
          <tbody>
            {cafes.map((cafe) => (
              <tr
                key={cafe.id}
                onClick={() => handleClick(cafe.id)}
                className="cursor-pointer hover:bg-neutral-50 h-12 border-y"
              >
                <td className="px-5">{cafe.id}</td>
                <td className="px-5">{cafe.nombre}</td>
                <td className="px-5">{cafe.tipo}</td>
                <td className="px-5">{cafe.region}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* detalle */}
        <div className="flex flex-col items-center w-96 h-fit min-h-[325px] bg-[rgba(224,187,187,0.2)] border-2 border-neutral-700 p-2">
          <h2 className="text-xl text-center font-black uppercase m-0">
            {selected?.nombre}
          </h2>
          <p className="text-center">{selected?.fecha_cultivo?changeDate(selected.fecha_cultivo, language):null}</p>
          {selected && (
            <img
              src={selected?.imagen}
              alt="cafe"
              className="object-contain w-full h-44"
            />
          )}
          {selected && (
            <p className="m-0 text-center">
              <FormattedMessage id="Notes"/>
            </p>
          )}
          {selected && <p className="text-center">{selected?.notas}</p>}
          {selected && (
            <p className="text-lg font-bold text-center">
              <FormattedMessage id="CCultTxt" /> {selected?.altura}{" "}
              <FormattedMessage id="MASL" />
            </p>
          )}
        </div>
      </div>

      <Contact />
    </div>
  );
}

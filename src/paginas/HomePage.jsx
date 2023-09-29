import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import axios from "../api";

// import books from "../assets/books.png"; 
// import axios from "../api";

export default function HomePage() {
    const [books, setBooks] = useState([]);//
  const [selected, setSelected] = useState(null);//

//   useEffect(() => {
//     const getBooks = async () => {//
//       try {
//         const res = await axios.get("");//
//         setBooks(res.data);//
//       } catch (err) {
//         alert("Error");
//       }
//     };

//     getBooks();
//   }, []);

  const showDetail = async (id) => {
    const res = await axios.get(`books/${id}`);
    setSelected(res.data);
  }; //

  return (
    <div className="flex flex-wrap justify-center items-start w-screen h-screen p-8">
      {/* grilla */}
      <div className="flex flex-wrap gap-4 justify-center items-center w-3/4">
        {/* {books.map((book) => (
          <Card {...book} handleClick={() => showDetail(book.id)} />
        ))} */}
      </div>

      {/* detalle */}
      <div className="flex flex-1 flex-col gap-y-2 justify-center items-start">
        {localStorage.getItem("rol") === "Administrador" ? (
          <>
            <input className="font-medium text-2xl" value={selected?.name} />
            <hr />
            <input
              className="font-medium text-lg"
              value={`ISBN: ${selected?.isbn}`}
            />
            <input
              className="font-medium text-lg"
              value={`Author: ${selected?.author}`}
            />
            <input
              className="font-medium text-lg"
              value={`Publisher: ${selected?.publisher}`}
            />
            <input
              className="font-medium text-lg"
              value={`Genre: ${selected?.gender}`}
            />
            <input
              className="font-medium text-lg"
              value={`Year: ${selected?.year}`}
            />
            <input
              className="font-medium text-lg"
              value={`Available Online: ${selected?.available_online}`}
            />
            <input
              className="font-medium text-lg"
              value={`Price: ${selected?.price}`}
            />
            <input
              className="font-medium text-lg"
              value={`Summary: ${selected?.summary}`}
            />
          </>
        ) : (
          <>
            <h1 className="font-medium text-2xl">{selected?.name}</h1>
            <hr />
            <h1 className="font-medium text-lg">ISBN: {selected?.isbn}</h1>
            <h1 className="font-medium text-lg">
              <FormattedMessage id="author" />: {selected?.author}
            </h1>
            <h1 className="font-medium text-lg">
              <FormattedMessage id="publisher" />: {selected?.publisher}
            </h1>
            <h1 className="font-medium text-lg">
              <FormattedMessage id="gender" />: {selected?.gender}
            </h1>
            <h1 className="font-medium text-lg">
              <FormattedMessage id="year" />: {selected?.year}
            </h1>
            <h1 className="font-medium text-lg">
              <FormattedMessage id="available" />:{" "}
              {selected?.available_online.toString()}
            </h1>
            <h1 className="font-medium text-lg">
              <FormattedMessage id="price" />: {selected?.price}
            </h1>
            <h1 className="font-medium text-lg">
              <FormattedMessage id="summary" />: {selected?.summary}
            </h1>
          </>
        )}
      </div>
    </div>
  );  
}

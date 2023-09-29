import React from "react";

export default function Card({ id, name, image, isbn, handleClick }) {
  return (
    <div
      className="w-[250px] h-[300px] shadow-around rounded-lg p-4 cursor-pointer"
      onClick={handleClick}
    >
      <img src={image} alt="card img" />
      <h1 className="text-xl font-semibold">{name}</h1>
      <p>ISBN: {isbn}</p>
    </div>
  );
}

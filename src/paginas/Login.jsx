import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormattedMessage } from "react-intl";
// import books from "../imgs/books.png"; 
import axios from "../api";

export default function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        if (password.length < 8) {
            alert("Password must be at least 8 characters long");
            return;
        }
        const data = {
            "email": username,
            "password": password,
        }
        const config = {
            headers:{
                "Content-Type": "application/json",
                "X-API-Key": "b3b6c5f0"
            }
          };
        try {
            const response = await axios.post("/login", data, config);
            localStorage.setItem("rol", response.data.rol);
            navigate("/home");
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }
    // setUsername("ahc@hotmail.com");
    // setPassword("1234567834");
    // handleLogin();

   
    return (
    <div className="bg-neutral-600/70 flex justify-center items-center w-screen h-screen">
      <div className="flex w-[750px] h-[550px] bg-white">
        {/* imagen */}
        <div className="flex flex-col justify-evenly items-center w-1/2 h-full p-6 bg-[#B7CCC2]">
       

          {/* texto */}
          <h1 className="text-2xl text-white font-semibold text-center">
            <FormattedMessage id="banner" />
          </h1>
        </div>

        {/* login */}oo
        <div className="flex flex-col justify-evenly items-center gap-y-5 w-1/2 h-full px-16 py-8">
          {/* titulo */}
          <h1 className="text-4xl text-center text-black font-medium leading-[50px] capitalize">
            <FormattedMessage id="title" />
          </h1>

          <div className="flex flex-col gap-y-8 justify-start w-full">
            {/* input email */}
            <div className="flex flex-col justify-start w-full">
              <label htmlFor="email" className="text-neutral-400 text-sm">
                <FormattedMessage id="usernamePH" />
              </label>
              <input
                id="email"
                type="email"
                className="border-b-[1px] border-neutral-400 p-2"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            {/* input password */}
            <div className="flex flex-col justify-start w-full">
              <label htmlFor="password" className="text-neutral-400 text-sm">
                <FormattedMessage id="passwordPH" />
              </label>
              <input
                id="password"
                type="password"
                className="border-b-[1px] border-neutral-400 mb-2 p-2"
                onChange={(e) => setPassword(e.target.value)}
              />
              {/* forgot */}
              <p className="text-right text-xs text-neutral-400">
                <FormattedMessage id="forgotPH" />
              </p>
            </div>

            {/* button */}
            <div className="flex flex-col gap-y-2">
              <button
                className="bg-neutral-600 hover:bg-neutral-700 text-white rounded-xl p-2"
                onClick={handleLogin}
              >
                <FormattedMessage id="signinPH" />
              </button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

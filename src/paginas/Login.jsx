import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormattedMessage } from "react-intl";
 import cafe from "../imgs/cafe.svg"; 
 import TableComponent from "./TableComponent";
import axios from "../api";

export default function Login() {

    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [response, setResponse] = useState({
      msg: "",
      status: "idle",
    });
  

    const handleLogin = async () => {
        const data = {
            "email": username,
            "password": password,
        }
        try {
            const response = await axios.post("/login", data);
            navigate("/home");
            console.log(response);
        } catch (err) {
          setResponse({
            msg: <FormattedMessage id="error" />,
            status: "error",
          });  } 
    }
    // setUsername("ahc@hotmail.com");
    // setPassword("1234567834");
    // handleLogin();

   
    return (
    <div className="">
      <div className="flex flex-col w-screen h-screen bg-white items-center">
        {/* image */}
        <div className="w-">
          <h1 className="">El aroma mágico</h1>
        <img src={cafe} alt="cafe" className="h-[250px]" />
        </div>

        
      
        {/* login */}
        <div className="flex flex-col justify-evenly items-center w-96">
          {/* titulo */}
        <h1 className="mr-1000">Inicio de sesión</h1>
          

          <div className=" border border-black bg-[#F9F1F1] flex flex-col gap-y-8 justify-start w-full">
            {/* input email */}
            <div className="flex flex-col justify-start w-full">
              <label htmlFor="email" className="">
                <FormattedMessage id="Email" />
              </label>
              <input
                id="email"
                type="email"
                className="bg-[#D9D9D9]"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            {/* input password */}
            <div className="flex flex-col justify-start w-full">
              <label htmlFor="password" className="">
                <FormattedMessage id="Password" />
              </label>
              <input
                id="password"
                type="password"
                className="bg-[#D9D9D9]"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            

            {/* button */}

           
            <div className="flex flex-col gap-y-2">
            <div className="flex justify-evenly">
              <button
                className="bg-[#8FA98F] text-black w-253 h-53"
                onClick={handleLogin}
              >
                <FormattedMessage id="SignIn" />
              </button>
              <button
                className="bg-[#E75D5D] text-black w-253 h-53"
                onClick={handleLogin}
              >
                <FormattedMessage id="Cancel" />
              </button>
              </div>
  
              {/* error */}
              {response.status === "error" && (
                <p className="text-red-500">{response.msg}</p>
              )}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

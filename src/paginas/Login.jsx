import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import Header from "../components/Header";
import axios from "../api";
import Contact from "../components/Contact";

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [response, setResponse] = useState({
    status: "idle",
  });

  const handleLogin = async () => {
    const data = {
      login: username,
      password,
    };
    try {
      const response = await axios.post("/login", data);
      setResponse({
        status: "idle",
      });
      navigate("/home");
    } catch (err) {
      setResponse({
        status: "error",
      });
    }
  };
  return (
    <div className="flex flex-col p-8 w-screen h-screen bg-white items-center">
      {/* image */}
      <Header />

      <br />

      {/* login */}
      <div className="flex justify-center items-center w-full">
        <div className="flex flex-col w-[500px]">
          {/* titulo */}
          <h1 className="text-lg font-semibold">
            <FormattedMessage id="LoginTitle" />
          </h1>

          <div className="border border-black bg-[#F9F1F1] flex flex-col gap-y-5 justify-start w-full px-28 py-4 mb-12">
            {/* input email */}
            <div className="flex flex-col justify-start w-full">
              <label htmlFor="username" className="text-base font-bold">
                <FormattedMessage id="Email" />
              </label>
              <input
                id="username"
                type="text"
                value={username}
                className="bg-[#D9D9D9] h-10 p-1"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            {/* input password */}
            <div className="flex flex-col justify-start w-full">
              <label htmlFor="password" className="text-base font-bold">
                <FormattedMessage id="Password" />
              </label>
              <input
                id="password"
                type="password"
                value={password}
                className="bg-[#D9D9D9] h-10 p-1"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* button */}
            <div className="flex justify-between items-center gap-x-8">
              <button
                type="submit"
                className="bg-[#8FA98F] hover:bg-[#778f77] text-black font-bold px-2 py-1 w-1/2"
                onClick={handleLogin}
              >
                <FormattedMessage id="SignIn" />
              </button>
              <button
                className="bg-[#E75D5D] hover:bg-red-600 text-black font-bold w-1/2 px-2 py-1"
                onClick={() => {
                  setUsername("");
                  setPassword("");
                }}
              >
                <FormattedMessage id="Cancel" />
              </button>
            </div>
            {/* error */}
            {response.status === "error" && (
              <p className="text-red-500 text-sm font-semibold">
                <FormattedMessage id="Error" />
              </p>
            )}
          </div>
          <Contact />
        </div>
      </div>
    </div>
  );
}

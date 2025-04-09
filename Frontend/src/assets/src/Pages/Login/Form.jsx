import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const Form = () => {
  const [user, setUser] = useState({ Name: "", Password: "" });
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    axios.post("", user).then((res) => {
      localStorage.setItem(
        "user",
        JSON.stringify({ role: "user", name: user.Name })
      );
      navigate("/");
    });
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <div className="max-w-[350px] shadow-md rounded-[40px] p-[25px_35px] border-[5px] border-white m-5">
      <div className="text-center font-extrabold text-[30px] text-[#1089d3]">
        Sign In
      </div>
      <form className="mt-5" onSubmit={submitHandler}>
        <input
          required
          className="w-full bg-white border-none px-5 py-4 rounded-[20px] mt-4 outline-gray-400 outline focus:outline-none focus:border-x-2 focus:border-[#12B1D1] placeholder:text-gray-400"
          type="text"
          name="Name"
          value={user.Name}
          onChange={handleInput}
          placeholder="E-mail"
        />
        <input
          required
          className="w-full bg-white border-none px-5 py-4 rounded-[20px] mt-4 outline-gray-400 outline focus:outline-none focus:border-x-2 focus:border-[#12B1D1] placeholder:text-gray-400"
          type="password"
          name="Password"
          value={user.Password}
          onChange={handleInput}
          placeholder="Password"
        />
        <span className="block mt-2 ml-2 text-xs text-blue-500">
          <a href="#">Forgot Password ?</a>
        </span>
        <input
          type="submit"
          value="Sign In"
          className="w-full font-bold bg-blue-500 text-white py-4 mt-5 rounded-[20px]  border-none transition-transform duration-200 hover:scale-[1.03] active:scale-95"
        />
      </form>
      <div className="flex justify-between mt-2">
        <Link to="/register" className="text-blue-500 text-sm ">
          Register now
        </Link>
        <Link to="/adminlogin" className="text-blue-500 text-sm ">Login as Admin</Link>
      </div>
      <span className="block text-center mt-4 text-[9px] text-[#0099ff]">
        <a href="#">Learn user licence agreement</a>
      </span>
    </div>
  );
};

export default Form;

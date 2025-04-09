import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Form = () => {
  const navigate = useNavigate();

  const [userData, setuserData] = useState({
    Name: "",
    Email: "",
    Phone: "",
    ReferalCode: "",
    Password: ""
  });

  const HandleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setuserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("", userData).then((res) => {
      navigate('/login');
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        className="flex flex-col gap-2 max-w-sm bg-white p-5 rounded-2xl relative shadow-md w-full"
        onSubmit={handleSubmit}
      >
        {/* Title with dots and animation */}
        <p className="text-[28px] text-[royalblue] font-semibold tracking-tight relative flex items-center pl-8">
          Register
          <span className="absolute left-0 w-4 h-4 bg-[royalblue] rounded-full" />
          <span className="absolute left-0 w-4 h-4 bg-[royalblue] rounded-full animate-ping" />
        </p>

        {/* Subtext */}
        <p className="text-sm text-gray-600">
          Signup now and get full access to our app.
        </p>

        {/* Name */}
        <div className="flex gap-2">
          <label className="relative w-full">
            <input
              required
              type="text"
              name="Name"
              value={userData.Name}
              onChange={HandleInput}
              placeholder=" "
              className="w-full p-3 pb-5 border border-gray-400 rounded-xl peer outline-none"
            />
            <span className="absolute left-3 top-[14px] text-gray-500 text-sm peer-placeholder-shown:top-[14px] peer-placeholder-shown:text-sm peer-focus:top-7 peer-focus:text-xs peer-focus:font-semibold peer-valid:text-green-600 transition-all duration-300">
              Name
            </span>
          </label>
        </div>

        {/* Other inputs */}
        {[
          { label: 'Email', type: 'email' },
          { label: 'Phone', type: 'tel' },
          { label: 'ReferalCode', type: 'text', display: 'Refereral code' },
          { label: 'Password', type: 'password' },
        ].map(({ label, type, display }) => (
          <label key={label} className="relative">
            <input
              required
              type={type}
              name={label}
              value={userData[label]}
              onChange={HandleInput}
              placeholder=" "
              className="w-full p-3 pb-5 border border-gray-400 rounded-xl peer outline-none"
            />
            <span className="absolute left-3 top-[14px] text-gray-500 text-sm peer-placeholder-shown:top-[14px] peer-placeholder-shown:text-sm peer-focus:top-7 peer-focus:text-xs peer-focus:font-semibold peer-valid:text-green-600 transition-all duration-300">
              {display || label}
            </span>
          </label>
        ))}

        {/* Submit Button */}
        <button
          type="submit"
          className="border-none outline-none bg-[royalblue] hover:bg-blue-700 text-white p-3 rounded-xl text-[16px] transition-all"
        >
          Submit
        </button>

        {/* Sign in link */}
        <p className="text-sm text-center text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-[royalblue] hover:underline">
            Signin
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Form;

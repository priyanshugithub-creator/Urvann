import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminSignForm = () => {
  const navigate = useNavigate();
  const [adminData, setAdminData] = React.useState({
    AdminName: "",
    Password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdminData({ ...adminData, [name]: value });
  };

  const SubmitHandler = async (e) => {
    e.preventDefault();
    try {

      await axios.post("http://localhost:3000/adminsapi/adminlogin", adminData);
      localStorage.setItem("user", JSON.stringify({ role: "admin", name: adminData.AdminName }));
      navigate('/admindashboard');
    } catch (err) {
      console.error("Login failed", err);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form
        className="bg-white p-4 max-w-sm w-full rounded-lg shadow-md"
        onSubmit={SubmitHandler}
      >
        <p className="text-xl font-semibold text-center text-black mb-4">Admin Login</p>
        
        <div className="relative mb-4">
          <input
            type="email"
            placeholder="Enter email"
            name="AdminName"
            value={adminData.AdminName}
            onChange={handleChange}
            className="bg-white p-4 pr-12 text-sm w-full border border-gray-300 rounded-lg shadow-sm outline-none"
          />
        </div>
        
        <div className="relative mb-4">
          <input
            type="password"
            placeholder="Enter password"
            name="Password"
            value={adminData.Password}
            onChange={handleChange}
            className="bg-white p-4 pr-12 text-sm w-full border border-gray-300 rounded-lg shadow-sm outline-none"
          />
        </div>
        
        <button
          type="submit"
          className="block w-full py-3 px-5 bg-indigo-600 text-white text-sm font-medium rounded-lg uppercase"
        >
          Sign in
        </button>
      </form>
    </div>
  );
};

export default AdminSignForm;

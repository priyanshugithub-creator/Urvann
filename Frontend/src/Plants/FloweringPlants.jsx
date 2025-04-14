import React, { useEffect } from "react";

import Sidebar3 from "./Sidebar3.jsx";
import Layout from "../Component/Layout/Layout.jsx";
import PlantCard from "../Component/Other/Carousel2/PlantsCard.jsx";
import { useParams } from "react-router-dom";
import axios, { Axios } from "axios";

const FloweringPlants = () => {
  const plants = [
    { id: 1, name: "Aloe Vera", price: "₹80", image: "/plant_images/1.avif" },
    {
      id: 2,
      name: "Fiddle Leaf Fig",
      price: "₹199",
      image: "/plant_images/1.avif",
    },
    {
      id: 3,
      name: "Snake Plant",
      price: "₹149",
      image: "/plant_images/1.avif",
    },
    { id: 4, name: "Peace Lily", price: "₹175", image: "/plant_images/1.avif" },
    {
      id: 5,
      name: "Spider Plant",
      price: "₹129",
      image: "/plant_images/1.avif",
    },
    { id: 6, name: "Pothos", price: "₹90", image: "/plant_images/1.avif" },
    { id: 7, name: "Pothos", price: "₹90", image: "/plant_images/1.avif" },
    { id: 8, name: "Pothos", price: "₹90", image: "/plant_images/1.avif" },
    { id: 9, name: "Pothos", price: "₹90", image: "/plant_images/1.avif" },
    { id: 10, name: "Pothos", price: "₹90", image: "/plant_images/1.avif" },
    { id: 11, name: "Pothos", price: "₹90", image: "/plant_images/1.avif" },
    { id: 12, name: "Pothos", price: "₹90", image: "/plant_images/1.avif" },
    { id: 13, name: "Pothos", price: "₹90", image: "/plant_images/1.avif" },
    { id: 14, name: "Pothos", price: "₹90", image: "/plant_images/1.avif" },
    { id: 15, name: "Pothos", price: "₹90", image: "/plant_images/1.avif" },
    { id: 16, name: "Pothos", price: "₹90", image: "/plant_images/1.avif" },
  ];

  const category = useParams();

  useEffect(() => {
    const admin = JSON.parse(localStorage.getItem("admin"));
    const token = admin?.token;

    axios
      .get(`http://localhost:3000/plantsapi/showplants/${category.category}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        // set your state here if needed
      })
      .catch((err) => {
        console.error(err);
        // optional: redirect to login or show unauthorized message
      });
  }, []);

  return (
    <Layout>
      <div>
        <h1 className="my-5">Flowering Plants</h1>
        <div className="lg:flex">
          <div>
            <Sidebar3 />
          </div>
          <div className="flex-1 h-[100svh] hide-scrollbar overflow-auto">
            <div className="w-full mt-[2rem] px-2 grid grid-cols-2 md:grid-cols-4 md:gap-4 ">
              {plants.map((plant) => (
                <PlantCard
                  key={plant.id}
                  name={plant.name}
                  price={plant.price}
                  image={plant.image}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FloweringPlants;

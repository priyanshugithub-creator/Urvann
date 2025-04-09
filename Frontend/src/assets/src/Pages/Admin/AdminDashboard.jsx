import React, { useEffect, useState } from "react";
import { Plus } from "lucide-react";

const AdminDashboard = () => {
  const [tab, setTab] = useState("plants");
  const [plants, setPlants] = useState([]);
  const [pots, setPots] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newItem, setNewItem] = useState({
    name: "",
    price: "",
    description: "",
    stock: "",
    image: null,
    imagePreview: "",
  });

  useEffect(() => {
    // Simulated backend data
    setPlants([
      {
        id: 1,
        name: "Snake Plant",
        price: "250",
        description: "Air-purifying indoor plant",
        stock: "15",
        imagePreview: "https://via.placeholder.com/150",
      },
    ]);
    setPots([
      {
        id: 1,
        name: "Clay Pot",
        price: "120",
        description: "Traditional eco-friendly pot",
        stock: "40",
        imagePreview: "https://via.placeholder.com/150",
      },
    ]);
  }, []);

  const handleAdd = () => {
    if (!newItem.name || !newItem.price || !newItem.stock) return;

    const newId = Date.now();
    const newItemWithId = { id: newId, ...newItem };

    if (tab === "plants") setPlants([...plants, newItemWithId]);
    else setPots([...pots, newItemWithId]);

    // Reset
    setNewItem({
      name: "",
      price: "",
      description: "",
      stock: "",
      image: null,
      imagePreview: "",
    });
    setShowModal(false);
  };

  const items = tab === "plants" ? plants : pots;

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>

      {/* Tabs */}
      <div className="flex gap-4 mb-6">
        {["plants", "pots"].map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-4 py-2 rounded-full ${
              tab === t ? "bg-green-600 text-white" : "bg-gray-200"
            }`}
          >
            {t.charAt(0).toUpperCase() + t.slice(1)}
          </button>
        ))}
      </div>

      {/* Add Button */}
      <button
        className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        onClick={() => setShowModal(true)}
      >
        <Plus size={20} /> Add {tab === "plants" ? "Plant" : "Pot"}
      </button>

      {/* List */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="border p-4 rounded shadow-sm bg-white"
          >
            {item.imagePreview && (
              <img
                src={item.imagePreview}
                alt={item.name}
                className="h-40 w-full object-cover rounded mb-3"
              />
            )}
            <h2 className="text-xl font-semibold">{item.name}</h2>
            <p className="text-gray-600">₹{item.price}</p>
            <p className="text-sm mt-1 text-gray-700">{item.description}</p>
            <p className="text-sm text-gray-500">Stock: {item.stock}</p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-[90%] max-w-md space-y-4">
            <h3 className="text-lg font-bold">
              Add New {tab === "plants" ? "Plant" : "Pot"}
            </h3>
            <input
              type="text"
              placeholder="Name"
              className="w-full p-2 border rounded"
              value={newItem.name}
              onChange={(e) =>
                setNewItem((prev) => ({ ...prev, name: e.target.value }))
              }
            />
            <input
              type="number"
              placeholder="Price"
              className="w-full p-2 border rounded"
              value={newItem.price}
              onChange={(e) =>
                setNewItem((prev) => ({ ...prev, price: e.target.value }))
              }
            />
            <textarea
              placeholder="Description"
              className="w-full p-2 border rounded"
              value={newItem.description}
              onChange={(e) =>
                setNewItem((prev) => ({
                  ...prev,
                  description: e.target.value,
                }))
              }
            />
            <input
              type="number"
              placeholder="Available Stock"
              className="w-full p-2 border rounded"
              value={newItem.stock}
              onChange={(e) =>
                setNewItem((prev) => ({ ...prev, stock: e.target.value }))
              }
            />

            {/* Image URL input instead of file upload */}
            <input
              type="text"
              placeholder="Image URL"
              className="w-full p-2 border rounded"
              value={newItem.imagePreview || ""}
              onChange={(e) =>
                setNewItem((prev) => ({
                  ...prev,
                  imagePreview: e.target.value,
                  image: null,
                }))
              }
            />
            {newItem.imagePreview && (
              <img
                src={newItem.imagePreview}
                alt="Preview"
                className="h-32 object-cover rounded"
              />
            )}

            <div className="flex justify-end gap-2 pt-2">
              <button
                className="px-4 py-2 bg-gray-300 rounded"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-green-600 text-white rounded"
                onClick={handleAdd}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;

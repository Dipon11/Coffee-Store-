import React from 'react';
import Swal from 'sweetalert2';

const AddCoffee = () => {

  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newCoffee = Object.fromEntries(formData.entries())
    console.log(newCoffee)

    fetch('http://localhost:3000/coffees', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newCoffee)
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {

          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Coffee Added Sucessfully",
            showConfirmButton: false,
            timer: 1500
          });

        }
      })
  }
  return (
    <div className="min-h-screen bg-pink-100 py-20 px-4">
      <div className="max-w-5xl mx-auto bg-white p-10 rounded-xl shadow-md border border-pink-200">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-brown-800 mb-4">Add New Coffee</h1>
        <p className="text-center text-gray-700 max-w-2xl mx-auto mb-10">
          It is a long established fact that a reader will be distracted by the readable content of a page when
          looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.
        </p>

        <form onSubmit={handleAddCoffee} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-800 mb-1">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter coffee name"
              className="w-full border border-gray-300 px-4 py-2 rounded-md shadow-sm focus:ring-2 focus:ring-pink-300"
            />
          </div>

          {/* Chef */}
          <div>
            <label className="block text-sm font-medium text-gray-800 mb-1">Quantity</label>
            <input
              type="text"
              name="quantity"
              placeholder="Enter coffee Quantity"
              className="w-full border border-gray-300 px-4 py-2 rounded-md shadow-sm focus:ring-2 focus:ring-pink-300"
            />
          </div>

          {/* Supplier */}
          <div>
            <label className="block text-sm font-medium text-gray-800 mb-1">Supplier</label>
            <input
              type="text"
              name="supplier"
              placeholder="Enter coffee supplier"
              className="w-full border border-gray-300 px-4 py-2 rounded-md shadow-sm focus:ring-2 focus:ring-pink-300"
            />
          </div>

          {/* Taste */}
          <div>
            <label className="block text-sm font-medium text-gray-800 mb-1">Taste</label>
            <input
              type="text"
              name="taste"
              placeholder="Enter coffee taste"
              className="w-full border border-gray-300 px-4 py-2 rounded-md shadow-sm focus:ring-2 focus:ring-pink-300"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium text-gray-800 mb-1">Price</label>
            <input
              type="text"
              name="price"
              placeholder="Enter coffee price"
              className="w-full border border-gray-300 px-4 py-2 rounded-md shadow-sm focus:ring-2 focus:ring-pink-300"
            />
          </div>

          {/* Details */}
          <div>
            <label className="block text-sm font-medium text-gray-800 mb-1">Details</label>
            <input
              type="text"
              name="details"
              placeholder="Enter coffee details"
              className="w-full border border-gray-300 px-4 py-2 rounded-md shadow-sm focus:ring-2 focus:ring-pink-300"
            />
          </div>

          {/* Photo URL - full width */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-800 mb-1">Photo</label>
            <input
              type="text"
              name="photo"
              placeholder="Enter photo URL"
              className="w-full border border-gray-300 px-4 py-2 rounded-md shadow-sm focus:ring-2 focus:ring-pink-300"
            />
          </div>

          {/* Submit Button - full width */}
          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full bg-amber-700 text-white py-3 rounded-md text-lg font-semibold hover:bg-brown-700 transition-all"
            >
              Add Coffee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;

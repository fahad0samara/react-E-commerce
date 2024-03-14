import React from 'react';
import { Link } from 'react-router-dom';
import ProductAddedImage from './assets/product.png'; // Import your product added image

const ProductAddedConfirmation: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 p-4 rounded-xl shadow-xl w-96 mx-auto mt-10">
    <h2 className="text-2xl font-bold mb-4">Product Added Successfully!</h2>
    <img 
      src={ProductAddedImage} 
      alt="Product Added" 
      className="h-80 w-72 object-cover rounded-t-xl" 
    />
    <p className="text-lg mb-8">
      Your product has been added successfully. You can view the product in the list of products.
    </p>
    <div className="flex space-x-4">
      <Link
        to="/"
        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md transition-colors duration-300 ease-in-out"
      >
        Add Another Product
      </Link>
      <Link
        to="/List"
        className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md transition-colors duration-300 ease-in-out"
      >
        Go to Products
      </Link>
    </div>
  </div>
  );
};

export default ProductAddedConfirmation;

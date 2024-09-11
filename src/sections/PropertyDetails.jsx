import React from 'react';
import { useParams } from 'react-router-dom';
import { property } from '../components/export'; // Import the property data

const PropertyDetails = () => {
  const { id } = useParams(); // Get the property id from the URL
  const propertyDetails = property[id]; // Get property details using the id

  if (!propertyDetails) {
    return <div>Property not found</div>;
  }

  return (
    <div className="lg:w-[90%] m-auto lg:px-20 px-6 py-10 w-full">
      <h1 className="text-4xl font-bold text-red-600">{propertyDetails.name}</h1>
      <p className="text-xl text-gray-600">{propertyDetails.address}</p>
      <img src={propertyDetails.images} alt={propertyDetails.name} className="w-full h-[400px] object-cover mt-6 rounded-lg" />
      <h2 className="text-2xl font-semibold text-black mt-4 dark:text-white">{propertyDetails.price}</h2>
      <p className="text-md text-gray-600 dark:text-white">{propertyDetails.about}</p>
      <div className="flex gap-4 mt-6">
        <div><strong>Bedrooms:</strong> {propertyDetails.bed}</div>
        <div><strong>Bathrooms:</strong> {propertyDetails.bath}</div>
        <div><strong>Area:</strong> {propertyDetails.area}</div>
      </div>
      <div>
        <h1>Property details
        :</h1>
      </div>
      <h3 className="mt-4 text-lg font-bold text-gray-800">Owner: {propertyDetails.owner}</h3>
    </div>
  );
};

export default PropertyDetails;

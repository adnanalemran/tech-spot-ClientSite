import React from 'react';

const OffersSection = () => {
  return (
    <div className="bg-gray-100 p-16 mt-24">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Special Offers</h2>
        <p className="text-xl text-gray-600 mb-8">
          Check out our latest promotions and discounts. Don't miss out on these amazing offers!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Offer Cards */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-2">20% Off Smartphones</h3>
            <p className="text-gray-600 mb-4">Use code "SMART20" at checkout to get 20% off on all smartphones.</p>
            <a href="/smartphones" className="text-blue-600 hover:underline">Shop Now</a>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-2">50% Off Accessories</h3>
            <p className="text-gray-600 mb-4">Get a whopping 50% discount on all tech accessories this month.</p>
            <a href="/accessories" className="text-blue-600 hover:underline">Shop Now</a>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Limited Time Offer</h3>
            <p className="text-gray-600 mb-4">Hurry, this special offer won't last long. Check it out now!</p>
            <a href="/special-offers" className="text-blue-600 hover:underline">View All</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OffersSection;

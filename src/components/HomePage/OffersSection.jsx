import React from "react";

const OffersSection = () => {
  return (
    <div className="p-16 pt-24  bg-base-200">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Check Out Our Latest Offers</h2>
        <p className="text-xl text-gray-500 mb-8">
          Discover our exclusive promotions and discounts. Don't miss out on these incredible offers!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Offer Cards */}
          <div className="rounded-lg p-6 shadow-lg    bg-[#0f111a3d]   ">
            <h3 className="text-xl font-semibold mb-2">25% Off Smartphones</h3>
            <p className="mb-4">
              Use code "PHONE25" at checkout to get 25% off on all smartphones.
            </p>
            
          </div>
          <div className="rounded-lg shadow-lg  bg-[#0f111a3d]  p-6">
            <h3 className="text-xl font-semibold mb-2">40% Off Accessories</h3>
            <p className="mb-4">
              Get a fantastic 40% discount on all tech accessories this month.
            </p>
        
          </div>
          <div className="rounded-lg shadow-lg  bg-[#0f111a3d]  p-6">
            <h3 className="text-xl font-semibold mb-2">Free Shipping</h3>
            <p className="mb-4">
              Enjoy free shipping on all orders placed during this promotion.
            </p>
         
          </div>
          <div className="rounded-lg shadow-lg  bg-[#0f111a3d]  p-6">
            <h3 className="text-xl font-semibold mb-2">Clearance Sale</h3>
            <p className="mb-4">
              Grab the best deals on clearance items while supplies last.
            </p>
          
          </div>
          <div className="rounded-lg shadow-lg  bg-[#0f111a3d]  p-6">
            <h3 className="text-xl font-semibold mb-2">Limited-Time Offer</h3>
            <p className="mb-4">
              Hurry! This special offer is available for a limited time only.
            </p>
         
          </div>
          <div className="rounded-lg shadow-lg  bg-[#0f111a3d]  p-6">
            <h3 className="text-xl font-semibold mb-2">Holiday Discounts</h3>
            <p className="mb-4">
              Celebrate the holidays with our exclusive discounts and deals.
            </p>
       
          </div>
        </div>
      </div>
    </div>
  );
};

export default OffersSection;

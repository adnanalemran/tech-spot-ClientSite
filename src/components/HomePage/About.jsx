import React from "react";

const image='https://freebiescloud.com/wp-content/uploads/2020/10/1-87.png' 
const image2='https://i.ibb.co/dKMWLbW/fab-blog.png' 
const About = () => {
  return (
    <div className="hero py-16  bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:w-1/2 relative">
          <img src={image2} className="w-3/4 rounded-lg shadow-xl" />
          <img
            src={image}
            className="w-1/3 absolute right-5 top-1/4  "
          />
        </div>
        <div className="lg:w-1/2 space-y-5">
          <h3 className="text-3xl text-orange-500 font-bold">Festival offer </h3>
          <h1 className="text-5xl font-bold">
          Add products and get immediate discount
          </h1>
          <p className="py-6">
          Samsung Fab Grab Fest is the best time to purchase mobile phones, tablets, televisions, soundbars, refrigerators, washing machines, air conditioners, wearables, kitchen care, accessories, laptops, and monitors. Explore the best offers and great deals on all major electronic categories during the sale.
          </p>
        
      
        </div>
      </div>
    </div>
  );
};

export default About;

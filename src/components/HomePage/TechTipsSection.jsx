import React, { useEffect, useState } from "react";

const TechTipsSection = () => {
  const [techTips, setTechTips] = useState([]);

  useEffect(() => {
    fetch("/techTips.json")
      .then((response) => response.json())
      .then((data) => setTechTips(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="w-full p-8 space-y-6 my-24 ">
      <h2 className="text-4xl text-center font-bold">Tech Tips </h2>
      <hr className="my-5" />
      <div className="grid grid-cols-1   gap-4">
        {techTips.map((tip, index) => (
          <div key={index} className="card card-side bg-[#F3F4F6]  ">
            <figure className="m-4   " >
              <img className="w-48 rounded-xl " src={tip.image} alt={tip.title} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{tip.title}</h2>
              <p>{tip.summary}</p>
              <div className="card-actions justify-end">
               
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechTipsSection;

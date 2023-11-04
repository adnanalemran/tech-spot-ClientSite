import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "swiper/css";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { AuthContext } from "../provider/AuthProvider";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const CompanyProduct = () => {
  const { brandName } = useParams();
  const [products, setProducts] = useState([]);
  const [sliderImages, setSliderImages] = useState([]);

  const filteredProducts = products.filter(
    (product) => product.brandName === brandName
  );
  const { user } = useContext(AuthContext);
  const uid = user?.uid;
  console.log(uid);

  useEffect(() => {
    // Fetch product data
    fetch("https://b8a10-brandshop-server-side-ten.vercel.app/product")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching product data: ", error));

    fetch("/sliderImages.json")
      .then((response) => response.json())
      .then((data) => setSliderImages(data[brandName] || []))
      .catch((error) => console.error("Error fetching slider images: ", error));
  }, [brandName]);

  console.log(sliderImages);
  return (
    <div className="bg-base-200 ">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {sliderImages.map((image, index) => (
          <div key={index}>
            <div>
              <SwiperSlide>
                <img
                  className="w-full h-[250px] md:h-[400px] lg:h-[500px]"
                  src={image}
                  alt=""
                />
              </SwiperSlide>
            </div>
          </div>
        ))}
      </Swiper>

      <h1 className="text-3xl font-bold text-center pt-16">
        Product Data on {brandName}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-4">
        {filteredProducts.map((product) => (
          <div key={product._id} className="card  bg-base-300 rounded-lg shadow-xl">
            <figure className="m-4">
              <img
                className="w-64 rounded-xl "
                src={product.image}
                alt={product.name}
              />
            </figure>
            <div className="card-body p-4 ">
              <h2 className="card-title text-xl font-semibold tracking-tight ">
                {product.name}
              </h2>{" "}
              <p className="flex gap-2 p-0">
                <svg
                  className="w-4 h-4 text-yellow-300 mr-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <p className="font-bold">{product.rating}</p>
              </p>
              <p>Type: {product.type} <br />
                Brand Name: {product.brandName}
                
              </p>
              <p className="text-xl font-bold ">
                BDT: {product.price} Tk
              </p>
              <div className="card-actions gap-2 grid justify-center grid-cols-3">
                <Link to={`/product/${product._id}`}>
                  <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Details
                  </button>
                </Link>
                <Link to={`/product/update/${product._id}`}>
                  <button className="text-white bg-red-400  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Update
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyProduct;

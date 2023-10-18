
const Bannar = () => {
  return (
    <div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/PQ5RLtW/HP-FT03-KV-S23-Ultra-1440x640-D.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-20"></div>
            <div className="hero-content text-left text-neutral-content">
              <div className=" max-w-2xl">
                <h1 className="mb-5 text-5xl font-bold">Galaxy S23 Ultra</h1>
                <p className="mb-5">
                  "Still the king of low-light photography" - CNET Get up to
                  $800 or a minimum $100 instant trade-in credit toward Galaxy
                  523 Ultra.®
                </p>
              </div>
            </div>
          </div>

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        <div id="slide2" className="carousel-item relative w-full">
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/VxHdMVq/Display-Project-Elias-KV.webp)",
            }}
          >
            <div className="hero-overlay bg-opacity-20"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className=" max-w-2xl">
                <h1 className="mb-5 text-5xl font-bold">
                  The wonder of Disney on The Frame TV
                </h1>
                <p className="mb-5">
                  Now back after popular demand. Enjoy 100 Disney works of art,
                  only on the Disney100 Edition.
                </p>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/GTs8vtf/Display-S90-C-Homepage-KV.webp)",
            }}
          >
            <div className="hero-overlay bg-opacity-20"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className=" max-w-2xl">
                <h1 className="mb-5 text-5xl font-bold">
                  Get a tree slim S-pen™ Case
                </h1>
                <p className="mb-5">
                  Get up to $350 instant trade-in credit,® a free Smart Book
                  Cover' and 50% off the new Galaxy Buds FE.A
                </p>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/nrBbBT7/HP-FT03-KV-Z-Fold5-1440x640-D.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-20"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className=" max-w-2xl">
                <h1 className="mb-5 text-5xl font-bold">
                  Game day just got brighter
                </h1>
                <p className="mb-5">
                  Up to $1,200 off + $500 by bundling a Bespoke Fridge and 3 or
                  more products.
                </p>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bannar;

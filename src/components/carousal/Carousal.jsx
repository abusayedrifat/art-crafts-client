import React from "react";

const Carousal = () => {
  return (
    <div>
      <div className="carousel w-full md:h-[500px] lg:h-[750px]">
        {/* =====slider 1=== */}
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://i.imgur.com/VzSWg9x.jpg"
            className="w-full h-full"
          />
          <div className=" h-24 absolute left-28 top-1/2 -translate-y-[85%]">
            <h1 className="w-[500px] navbar-font text-4xl font-extrabold text-[#eeff00] leading-[60px]">
              Majestic Mountain & Forest Landscapes
            </h1>
            <div className="bg-[#0000007d] rounded border border-[#dfdfdf] w-[500px] px-5 py-3 mt-6">
              <p className="text-[#ffffffe1] text-font ">
                Experience the beauty of nature with stunning mountain views and
                lush forest landscapes captured on canvas.
              </p>
            </div>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide6" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        {/* ====slider 2====== */}
        <div id="slide2" className="carousel-item relative w-full">
          <img src="https://i.imgur.com/WtLlLqB.jpg" className="w-full" />
          <div className=" h-24 absolute left-28 top-1/2 -translate-y-[85%]">
            <h1 className="w-[500px] text-font text-5xl font-extrabold text-[#00d9dc] leading-[60px]">
              Expressive Oil Masterpieces
            </h1>
            <div className="bg-[#0000007d] rounded border border-[#dfdfdf] w-[500px] px-5 py-3 mt-6">
              <p className="text-[#ffffffe1] text-font ">
                Whether realistic or abstract, oil paintings bring depth and
                emotion to every stroke, making each piece a timeless treasure.
              </p>
            </div>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        {/* =====slider 3======== */}
        <div id="slide3" className="carousel-item relative w-full">
          <img src="https://i.imgur.com/qN7A7A4.jpg" className="w-full" />
          
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        {/* =====slider 4======= */}
        <div id="slide4" className="carousel-item relative w-full">
          <img src="https://i.imgur.com/VzSWg9x.jpg" className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide5" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

            {/* =====slider 5======== */}
        <div id="slide5" className="carousel-item relative w-full">
          <img
            src="https://i.imgur.com/j9MfTdn.png"
            className="w-full h-full"
          />
          <div className="w-64 h-16 absolute bg-[#0000004a] rounded border-[#ffffff] top-1/2 left-1/2">
            <p></p>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide6" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
            {/* =====slider 6========== */}
        <div id="slide6" className="carousel-item relative w-full">
          <img
            src="https://i.imgur.com/j9MfTdn.png"
            className="w-full h-full"
          />
          <div className="w-64 h-16 absolute bg-[#0000004a] rounded border-[#ffffff] top-1/2 left-1/2">
            <p></p>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide5" className="btn btn-circle">
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

export default Carousal;

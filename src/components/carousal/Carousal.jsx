import React from "react";

const Carousal = () => {
  return (
    <div>
      <div className="carousel w-full md:h-[500px] lg:h-[750px]">
        {/* =====slider 1=== landscape painting */}
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://i.imgur.com/RX2fdGW.jpg"
            className="w-full h-full"
          />
          <div className=" h-24 absolute left-6 lg:left-28 top-1/2 -translate-y-[70%] lg:-translate-y-[85%]">
            <h1 className="md:w-[500px] text-font text-xl md:text-5xl font-extrabold text-[#ffffff] drop-shadow-lg">
              Majestic Mountain & Forest Landscapes
            </h1>
            <div className="bg-[#0000007d] rounded border border-[#dfdfdf] w-[300px] md:w-[550px] px-5 py-3 mt-6">
              <p className="text-[#ffffffe1] text-font text-sm md:text-xl ">
                Experience the beauty of nature with stunning mountain views and lush forest landscapes captured on canvas.
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
        {/* ====slider 2====== portrait drawing */}
        <div id="slide2" className="carousel-item relative w-full">
          <img src="https://i.imgur.com/obfShea.jpg" className="w-full" />
          <div className=" h-24 absolute left-6 lg:left-28 top-1/2 -translate-y-[70%] lg:-translate-y-[85%]">
            <h1 className="md:w-[500px] text-font text-xl md:text-5xl font-extrabold text-[#858484] drop-shadow-lg">
            Timeless Portrait Sketches
            </h1>
            <div className="bg-[#0000007d] rounded border border-[#dfdfdf] w-[300px] md:w-[550px] px-5 py-3 mt-6">
              <p className="text-[#ffffffe1] text-font text-sm md:text-xl ">
              From delicate pencil sketches to bold ink outlines and vibrant acrylic portraits, capture every expression in a unique style.
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
        {/* =====slider 3======== watercolor*/}
        <div id="slide3" className="carousel-item relative w-full">
          <img src="https://i.imgur.com/PHT62pI.jpg" className="w-full" />
          <div className=" h-24 absolute left-6 lg:left-28 top-1/2 -translate-y-[70%] lg:-translate-y-[85%]">
            <h1 className="md:w-[500px] text-font text-xl md:text-5xl font-extrabold text-[#887a53] drop-shadow-lg">
            Elegant Watercolor Creations
            </h1>
            <div className="bg-[#0000007d] rounded border border-[#dfdfdf] w-[300px] md:w-[550px] px-5 py-3 mt-6">
              <p className="text-[#ffffffe1] text-font text-sm md:text-xl ">
              Soft, flowing watercolor art featuring floral designs and lifelike animal portraits, blending beauty with artistic finesse..
              </p>
            </div>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        {/* =====slider 4======= oil painting */}
        <div id="slide4" className="carousel-item relative w-full">
          <img src="https://i.imgur.com/WtLlLqB.jpg" className="w-full" />
          <div className=" h-24 absolute left-6 lg:left-28 top-1/2 -translate-y-[70%] lg:-translate-y-[85%]">
            <h1 className="md:w-[500px] text-font text-xl md:text-5xl font-extrabold text-[#ffffff] drop-shadow-lg">
            Expressive Oil Masterpieces
            </h1>
            <div className="bg-[#0000007d] rounded border border-[#dfdfdf] w-[300px] md:w-[550px] px-5 py-3 mt-6">
              <p className="text-[#ffffffe1] text-font text-sm md:text-xl ">
              Whether realistic or abstract, oil paintings bring depth and emotion to every stroke, making each piece a timeless treasure.
              </p>
            </div>
          </div>
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
            src="https://i.imgur.com/etXYXaM.jpg"
            className="w-full h-full"
          />
           <div className=" h-24 absolute left-6 lg:left-28 top-1/2 -translate-y-[70%] lg:-translate-y-[85%]">
            <h1 className="md:w-[500px] text-font text-xl md:text-5xl font-extrabold text-[#ffffff] drop-shadow-lg">
            Bold & Striking Charcoal Art
            </h1>
            <div className="bg-[#0000007d] rounded border border-[#dfdfdf] w-[300px] md:w-[550px] px-5 py-3 mt-6">
              <p className="text-[#ffffffe1] text-font text-sm md:text-xl ">
              Explore the drama of light and shadow with figure sketches and architectural drawings in rich charcoal tones.
              </p>
            </div>
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
            src="https://i.imgur.com/pT7AvdU.jpg"
            className="w-full h-full"
          />
           <div className=" h-24 absolute left-6 lg:left-28 top-1/2 -translate-y-[70%] lg:-translate-y-[85%]">
            <h1 className="md:w-[500px] text-font text-xl md:text-5xl font-extrabold text-[#b6a16d] drop-shadow-lg">
            Vibrant & Fun Cartoon Creations
            </h1>
            <div className="bg-[#0000007d] rounded border border-[#dfdfdf] w-[300px] md:w-[550px] px-5 py-3 mt-6">
              <p className="text-[#ffffffe1] text-font text-sm md:text-xl ">
              From expressive comic strips to dynamic superhero designs, bring your imagination to life with playful illustrations.
              </p>
            </div>
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

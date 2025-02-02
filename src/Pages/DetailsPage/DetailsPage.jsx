import { AiOutlineDollar } from "react-icons/ai";
import { useLoaderData, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
const DetailsPage = () => {
  const loadCraftsData = useLoaderData();
  const navigate = useNavigate();

  useEffect(()=>{
    window.scroll(0,0)
  },[])
  return (
    <div className="w-[75%] mx-auto">
       <Helmet> <title> A&C | Crafts Details </title> </Helmet> 
      <button
        onClick={() => navigate("/allArtCrafts")}
        className="mt-5 button flex gap-1 items-center btn"
      >
        <span>
          {" "}
          <FaArrowLeft></FaArrowLeft>{" "}
        </span>{" "}
        Back
      </button>
      <div className="w-full border-2 border-[#dedccfa5]  flex flex-col md:flex-row gap-7 bg-[#dedccf36] px-5 py-8 mb-16 mt-8 rounded-md">
        <div className=" md:w-2/3">
          <img src={loadCraftsData.imgURL} alt="" className=" rounded" />
        </div>
        <div className=" text-lg text-font">
          <div className=" w-[200px] mx-auto">
            <h3 className="text-2xl text-center pb-1">Craft Information</h3>
            <hr className="broder-2 border-black mb-5" />
          </div>
          <p className="font-medium text-[#000000d3]">
            Craft name :{" "}
            <span className="font-light">{loadCraftsData.itemName} </span>
          </p>
          <p className="font-medium text-[#000000d3]">
            Category :{" "}
            <span className="font-light">{loadCraftsData.subcategory} </span>
          </p>
          <p className="font-medium text-[#000000d3]">
            Stock status :{" "}
            <span className="font-light">{loadCraftsData.stockStatus} </span>
          </p>
          <p className="font-medium text-[#000000d3] flex">
            Price :{" "}
            <span className="flex items-center ml-2 gap-1">
              {" "}
              <AiOutlineDollar></AiOutlineDollar> {loadCraftsData.price}{" "}
            </span>
          </p>
          <p className="font-medium text-[#000000d3]">
            Ratings :{" "}
            <span className="font-light">{loadCraftsData.stockStatus} </span>
          </p>
          <p className="font-medium text-[#000000d3]">
            Cutomization :{" "}
            <span className="font-light">{loadCraftsData.cutomization} </span>
          </p>
          <p className="font-medium text-[#000000d3]">
            Crafts maker name :{" "}
            <span className="font-light">{loadCraftsData.userName} </span>
          </p>
          <p className="font-medium text-[#000000d3]">
            Crafts maker email :{" "}
            <span className="font-light">{loadCraftsData.email} </span>
          </p>
          <p className="font-medium text-[#000000d3]">
            Story :{" "}
            <span className="font-light">{loadCraftsData.shortDes} </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;

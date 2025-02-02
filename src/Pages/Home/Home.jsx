import { NavLink, useLoaderData } from "react-router-dom";
import Carousal from "../../components/carousal/Carousal";
import "./home.css";
import FAQ from "../../components/FAQ/FAQ";
import CustomerReview from "../../components/Customer review/CustomerReview";
import CraftsItem from "../../components/CraftsItems/CraftsItem";
import { useEffect } from "react";
import './home.css'

const Home = () => {

  // useEffect(()=>{
  //     window.scroll(0,0)
  //   },[])

  return (
    <div className="background pb-64 grid grid-cols-1 justify-center items-center">
    
      
      <Carousal></Carousal>

      <div className="w-[90%] md:w-[80%] mx-auto flex flex-col justify-center items-center">
        <h3 className="navbar-font text-3xl md:text-5xl text-center mt-20 mb-6 md:pt-14 bg-[#bdb5b5ac] p-6 rounded ">
          Art&Crafts Items
        </h3>
       
        <div className=" py-9 md:pb-24">
          
         
            <CraftsItem></CraftsItem>
        
        </div>

        <div className="my-10  md:my-20 md:w-[80%]">
          <h2 className="text-font text-3xl text-center font-extrabold py-6 md:py-8 md:text-6xl">
            FAQ
          </h2>
          <FAQ></FAQ>
        </div>
        <div className="mt-10">

        <CustomerReview></CustomerReview>
        </div>
      </div>
    </div>
  );
};

export default Home;

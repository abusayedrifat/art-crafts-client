import { NavLink, useLoaderData } from "react-router-dom";
import Carousal from "../../components/carousal/Carousal";
import "./home.css";
import FAQ from "../../components/FAQ/FAQ";
import CustomerReview from "../../components/Customer review/CustomerReview";
import CraftsItem from "../../components/CraftsItems/CraftsItem";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../components/AuthProvider/AuthProvider";

const Home = () => {
  const {loading} = useContext(AuthContext)

  useEffect(()=>{
      window.scroll(0,0)
    },[])

  return (
    <div className="grid grid-cols-1 justify-center items-center">
      <Carousal></Carousal>

      <div className="w-full md:w-[80%] mx-auto flex flex-col justify-center items-center">
        <h3 className="navbar-font text-4xl text-center my-16 md:pt-14">
          Art&Crafts Items
        </h3>
       
        <div className="my-9 md:mb-24">
          
         
            <CraftsItem></CraftsItem>
        
        </div>

        <div className="my-10 md:my-20 md:w-[80%]">
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

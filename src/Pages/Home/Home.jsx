import { NavLink, useLoaderData } from "react-router-dom";
import Carousal from "../../components/carousal/Carousal";
import "./home.css";
import FAQ from "../../components/FAQ/FAQ";
import CustomerReview from "../../components/Customer review/CustomerReview";
import CraftsItem from "../../components/CraftsItems/CraftsItem";
import { useContext } from "react";
import { AuthContext } from "../../components/AuthProvider/AuthProvider";

const Home = () => {
  const {loading} = useContext(AuthContext)

  

  return (
    <div className="grid grid-cols-1 justify-center items-center">
      <Carousal></Carousal>

      <div className="w-[90%] md:w-[80%] mx-auto flex flex-col justify-center items-center">
        <h3 className="navbar-font text-4xl text-center mt-16">
          Art&Crafts Items
        </h3>
        <div className=" mt-10 pb-20">
          <button className="btn button">
          <NavLink to="/addCrafts"> Add Art&Craft</NavLink>
            
          </button>
        </div>

        <div className="my-9 md:my-24">
          <h2 className="text-3xl font-extrabold text-font text-center my-14 md:text-5xl">
            Arts & Crafts Category
          </h2>
          <div className="border">
            <CraftsItem></CraftsItem>
          </div>
        </div>

        <div className="my-10 md:my-20 md:w-[80%]">
          <h2 className="text-font text-3xl text-center font-extrabold py-6 md:py-8 md:text-6xl">
            FAQ
          </h2>
          <FAQ></FAQ>
        </div>
        <div className="mb-20">
          <CustomerReview></CustomerReview>
        </div>
      </div>
    </div>
  );
};

export default Home;

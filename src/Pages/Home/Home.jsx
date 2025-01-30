import { NavLink, useLoaderData } from "react-router-dom";
import Carousal from "../../components/carousal/Carousal";
import CraftsItem from "../../components/CraftsItems/CraftsItem";
import "./home.css";
import FAQ from "../../components/FAQ/FAQ";

const Home = () => {
  const loadCrafts = useLoaderData();
  return (
    <div className="grid grid-cols-1 justify-center items-center">
      <Carousal></Carousal>

      <div className="w-[70%] mx-auto flex flex-col justify-center items-center">
        <h3 className="navbar-font text-4xl text-center mt-16">Art&Crafts Items</h3>
        <div className=" mt-10 pb-20">
          <button className="btn button">
            <NavLink to="/addCrafts"> Add Art&Craft</NavLink>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  justify-center gap-5 items-center ">
          {loadCrafts.map((craftsItem) => (
            <CraftsItem
              key={craftsItem._id}
              craftItem={craftsItem}
            ></CraftsItem>
          ))}
        </div>
        <div className="my-20 w-full">
          <h2 className="text-font text-3xl text-center font-bold py-6 md:py-8 md:text-6xl">FAQ</h2>
          <FAQ></FAQ>
        </div>
      </div>
    </div>
  );
};

export default Home;

import { NavLink, useLoaderData } from "react-router-dom";
import Carousal from "../../components/carousal/Carousal";
import CraftsItem from "../../components/CraftsItems/CraftsItem";

const Home = () => {
    const loadCrafts = useLoaderData()
  return (
    <div className="flex flex-col justify-center items-center">
      <Carousal></Carousal>
        <h3 className="navbar-font text-4xl mt-16">Art&Crafts Items</h3>
      <div className=" mt-10 pb-20">
        <button className="btn">
          <NavLink to='/addCrafts'> Add Art&Craft</NavLink>
        </button>
      </div>
      <div className="grid grid-cols-3 grid-rows-1 justify-center gap-5 items-center">
        {
            loadCrafts.map(craftsItem=>(<CraftsItem key={craftsItem._id} craftItem={craftsItem} ></CraftsItem>))
        }
        
      </div>
    </div>
  );
};

export default Home;

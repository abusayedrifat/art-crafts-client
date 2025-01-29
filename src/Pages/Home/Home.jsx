import { NavLink } from "react-router-dom";
import Carousal from "../../components/carousal/Carousal";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Carousal></Carousal>
        <h3 className="navbar-font text-4xl mt-16">Art&Crafts Items</h3>
      <div className=" mt-10 pb-20">
        <button className="btn">
          <NavLink to='/addCrafts'> Add Art&Craft</NavLink>
        </button>
      </div>
    </div>
  );
};

export default Home;

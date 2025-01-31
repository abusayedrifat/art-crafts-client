import { Link } from "react-router-dom";

const CraftsItem = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-center">
     
      <div>
        <div className=" w-full rounded-t-lg bg-[#dedccf] p-4">
          <img
            src="https://i.imgur.com/VzSWg9x.jpg"
            alt=""
            className="h-36 w-full rounded-t-md"
          />
        </div>
        <div className="p-3 text-left bg-gray-200 rounded-b-lg w-full">
          <Link to={"/subCategory/LandscapePainting"}>
            <button className="btn w-full"> Landscape Painting </button>{" "}
          </Link>
        </div>
      </div>
      
      <div>
        <div className=" w-full rounded-t-lg bg-[#dedccf] p-4">
          <img
            src="https://i.imgur.com/OewwaLs.jpg"
            alt=""
            className="h-36 w-full rounded-t-md"
          />
        </div>
        <div className="p-3 text-left bg-gray-200 rounded-b-lg w-full">
          <Link to={"/subCategory/PortraitDrawing"}>
            <button className="btn w-full"> Portrait Drawing </button>{" "}
          </Link>
        </div>
      </div>

      <div>
        <div className=" w-full rounded-t-lg bg-[#dedccf] p-4">
          <img
            src="https://i.imgur.com/WtLlLqB.jpg"
            alt=""
            className="h-36 w-full rounded-t-md"
          />
        </div>
        <div className="p-3 text-left bg-gray-200 rounded-b-lg w-full">
          <Link to={"/subCategory/OilPainting"}>
            <button className="btn w-full"> Oil Painting </button>{" "}
          </Link>
        </div>
      </div>

      <div>
        <div className=" w-full rounded-t-lg bg-[#dedccf] p-4">
          <img
            src="https://i.imgur.com/etXYXaM.jpg"
            alt=""
            className="h-36 w-full rounded-t-md"
          />
        </div>
        <div className="p-3 text-left bg-gray-200 rounded-b-lg w-full">
          <Link to={"/subCategory/CharcoalSketching"}>
            <button className="btn w-full"> Charcoal Sketching </button>{" "}
          </Link>
        </div>
      </div>

      <div>
        <div className=" w-full rounded-t-lg bg-[#dedccf] p-4">
          <img
            src="https://i.imgur.com/PHT62pI.jpg"
            alt=""
            className="h-36 w-full rounded-t-md"
          />
        </div>
        <div className="p-3 text-left bg-gray-200 rounded-b-lg w-full">
          <Link to={"/subCategory/WaterColorPainting"}>
            <button className="btn w-full"> Water Color Painting </button>{" "}
          </Link>
        </div>
      </div>

      <div>
        <div className=" w-full rounded-t-lg bg-[#dedccf] p-4">
          <img
            src="https://i.imgur.com/KlfCSiM.jpg"
            alt=""
            className="h-36 w-full rounded-t-md"
          />
        </div>
        <div className="p-3 text-left bg-gray-200 rounded-b-lg w-full">
          <Link to={"/subCategory/CartoonDrawing"}>
            <button className="btn w-full"> Cartoon Drawing </button>{" "}
          </Link>
        </div>
      </div>

  
    </div>
  );
};

export default CraftsItem;

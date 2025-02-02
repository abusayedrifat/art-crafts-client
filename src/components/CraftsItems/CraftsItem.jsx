import { Link } from "react-router-dom";

const CraftsItem = () => {
  return (
    <div className=" w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-center">
      <div className="w-full shadow-lg">
        <div className=" w-full rounded-t-lg border-2 border-[#dedccf]  bg-[#dedccfac] p-4">
          <img
            src="https://i.imgur.com/VzSWg9x.jpg"
            alt=""
            className="h-60 w-full rounded-t-md"
          />
        </div>
        <div className="p-3 text-left bg-[#c9b99da0] rounded-b-lg w-full">
          <Link to={"/subCategory/LandscapePainting"}>
            <button className="btn bg-[#c8c19cf0] border-2 border-[#c9b99d] w-full"> Landscape Painting </button>
          </Link>
        </div>
      </div>

      <div className="w-full shadow-lg">
        <div className=" w-full rounded-t-lg border-[#dedccf]  bg-[#dedccfac] p-4">
          <img
            src="https://i.imgur.com/OewwaLs.jpg"
            alt=""
            className="h-60 w-full rounded-t-md"
          />
        </div>
        <div className="p-3 text-left bg-[#c9b99da0] rounded-b-lg w-full">
          <Link to={"/subCategory/PortraitDrawing"}>
            <button className="btn w-full bg-[#c8c19cf0] border-2 border-[#c9b99d]"> Portrait Drawing </button>{" "}
          </Link>
        </div>
      </div>

      <div className="w-full shadow-lg">
        <div className=" w-full rounded-t-lg border-[#dedccf]  bg-[#dedccfac] p-4">
          <img
            src="https://i.imgur.com/WtLlLqB.jpg"
            alt=""
            className="h-60 w-full rounded-t-md"
          />
        </div>
        <div className="p-3 text-left bg-[#c9b99da0] rounded-b-lg w-full">
          <Link to={"/subCategory/OilPainting"}>
            <button className="btn w-full bg-[#c8c19cf0] border-2 border-[#c9b99d]"> Oil Painting </button>{" "}
          </Link>
        </div>
      </div>

      <div className="w-full shadow-lg">
        <div className=" w-full rounded-t-lg border-[#dedccf]  bg-[#dedccfac] p-4">
          <img
            src="https://i.imgur.com/etXYXaM.jpg"
            alt=""
            className="h-60 w-full rounded-t-md"
          />
        </div>
        <div className="p-3 text-left bg-[#c9b99da0] rounded-b-lg w-full">
          <Link to={"/subCategory/CharcoalSketching"}>
            <button className="btn w-full bg-[#c8c19cf0] border-2 border-[#c9b99d]"> Charcoal Sketching </button>{" "}
          </Link>
        </div>
      </div>

      <div className="w-full shadow-lg">
        <div className=" w-full rounded-t-lg border-[#dedccf]  bg-[#dedccfac] p-4">
          <img
            src="https://i.imgur.com/PHT62pI.jpg"
            alt=""
            className="h-60 w-full rounded-t-md"
          />
        </div>
        <div className="p-3 text-left bg-[#c9b99da0] rounded-b-lg w-full">
          <Link to={"/subCategory/WaterColorPainting"}>
            <button className="btn w-full bg-[#c8c19cf0] border-2 border-[#c9b99d]"> Water Color Painting </button>{" "}
          </Link>
        </div>
      </div>

      <div className="w-full shadow-lg">
        <div className=" w-full rounded-t-lg border-[#dedccf]  bg-[#dedccfac] p-4">
          <img
            src="https://i.imgur.com/KlfCSiM.jpg"
            alt=""
            className="h-60 w-full rounded-t-md"
          />
        </div>
        <div className="p-3 text-left bg-[#c9b99da0] rounded-b-lg w-full">
          <Link to={"/subCategory/CartoonDrawing"}>
            <button className="btn w-full bg-[#c8c19cf0] border-2 border-[#c9b99d]"> Cartoon Drawing </button>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CraftsItem;

import { useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";

const WaterColorPainting = () => {
  const loadcrafts = useLoaderData();
  console.log(loadcrafts);

  useEffect(()=>{
      window.scroll(0,0)
    },[])
    
  return (
    <div className="w-[70%] mx-auto mb-24">
      <h1 className="my-14 text-font text-3xl md:text-5xl text-center">
        Water Color Paintings
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-center">
        {loadcrafts.map((craft) => (
          <div className="w-full">
            <div>
              <div className=" w-full rounded-t-lg bg-[#dedccf] p-4">
                <img
                  src={craft.imgURL}
                  alt=""
                  className="h-36 w-full rounded-t-md"
                />
              </div>

              <div className="p-3 text-left bg-gray-200 rounded-b-lg">
                <div>
                  <span className="font-medium ">Category :</span>{" "}
                  {craft.subcategory}
                </div>
                <div>
                  <span className="font-medium ">Price :</span> {craft.price}
                  <span>$</span>
                </div>
                <div>
                  <span className="font-medium ">Ratings:</span> {craft.ratings}
                </div>
                <div>
                  <span className="font-medium ">Stock status:</span>
                  {craft.stockStatus}
                </div>
                <div>
                  <span className="font-medium ">Processing Time:</span>
                  {craft.processingTime}
                </div>
                <Link
                  to={`http://localhost:5173/crafts/viewDetails/${craft._id}`}
                >
                  <button className="btn button w-full mt-4">View</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WaterColorPainting;

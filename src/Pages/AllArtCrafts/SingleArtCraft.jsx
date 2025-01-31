import { Link } from "react-router-dom";

const SingleArtCraft = ({ craftItem }) => {
  const { ratings, price, stockStatus, subcategory, itemName, _id, imgURL } =
    craftItem;
  return (
    <div className="w-full">
 
        
          <div>
            <div className=" w-full rounded-t-lg bg-[#dedccf] p-4">
              <img src={imgURL} alt="" className="h-36 w-full rounded-t-md" />
            </div>

            <div className="p-3 text-left bg-gray-200 rounded-b-lg">
              <div>
                <span className="font-medium ">Category :</span> {subcategory}
              </div>
              <div>
                <span className="font-medium ">Price :</span> {price}{" "}
                <span>$</span>
              </div>
              <div>
                <span className="font-medium ">Ratings:</span> {ratings}
              </div>
              <div>
                <span className="font-medium ">Stock status:</span>{" "}
                {stockStatus}
              </div>
             
                <Link to={`http://localhost:5173/crafts/viewDetails/${_id}`}> <button className="btn button w-full mt-4"> View </button> </Link>
            
               
            </div>
               
          </div>
       
      
    </div>
  );
};

export default SingleArtCraft;

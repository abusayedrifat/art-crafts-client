import { Link, useLoaderData } from "react-router-dom";

const LandscapePainting = () => {
  const loadcrafts = useLoaderData();
  console.log(loadcrafts);
  
  return (
    <div>
        <h1>Landscape Paintings</h1>

        <div>
          {loadcrafts.map(craft => {
        console.log(craft);
        
          <div className="w-full"> 
          {
            craft.subcategory
          }
            <div>
              <div className=" w-full rounded-t-lg bg-[#dedccf] p-4">
                {/* <img src={craft.imgURL} alt="" className="h-36 w-full rounded-t-md" /> */}
              </div>

              <div className="p-3 text-left bg-gray-200 rounded-b-lg">
                <div>
                  <span className="font-medium ">Category :</span> {craft.subcategory}
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
                {/* <Link to={`http://localhost:5173/craft/viewDetails/`}>
                  <button className="btn button w-full mt-4">
                    View
                  </button>
                </Link> */}
              </div>
            </div>
          </div>
        ;
      })}  
        </div>
      
    </div>
  );
};

export default LandscapePainting;

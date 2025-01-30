import { NavLink } from "react-router-dom";

const CraftsItem = ({craftItem}) => {
    const {ratings,price,stockStatus,subcategory,itemName,_id,imgURL} = craftItem
    return (
        <div>
            <NavLink to={`http://localhost:5173/crafts/viewDetails/${_id}`}>

            <div className="w-[300px]">
                <div className=" w-full rounded-t-lg bg-[#dedccf] p-4">
                <img src={imgURL} alt="" className="h-36 w-full rounded-t-md"/>
                
            </div>
            <div className="p-3 text-left bg-gray-200 rounded-b-lg">
                <div>
                    <span className="font-medium ">Category :</span> {subcategory}
                </div>
                 <div>
                   <span className="font-medium ">Price :</span> {price} <span>$</span> 
                 </div>
                 <div>
                    <span className="font-medium ">Ratings:</span> {ratings}
                 </div>
                 <div>
                      <span className="font-medium ">Stock status:</span> {stockStatus}
                 </div>
               
               
                </div>
            </div>

            </NavLink>
           
            
        </div>
    );
};

export default CraftsItem;
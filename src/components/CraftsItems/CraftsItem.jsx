
const CraftsItem = ({craftItem}) => {
    const {ratings,price,stockStatus,subcategory,itemName} = craftItem
    return (
        <div>
            <div className="w-[300px]">
                <div className=" w-full rounded-t-lg bg-[#a0782ea2] p-4">
                <img src="" alt="" className="h-36 "/>
                
            </div>
            <p className="text-center bg-gray-200 rounded-b-lg">
                 <span className="font-medium">Category:</span> {craftItem.subcategory}
                </p>
            </div>
           
            
        </div>
    );
};

export default CraftsItem;
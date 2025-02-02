import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const MyArtsCrafts = () => {
  const loadcrafts = useLoaderData();
  console.log(loadcrafts);
  const [crafts, setCrafts] = useState(loadcrafts);

  const handleDelete = (_id) => {

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: true,
    });
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          fetch(`https://arts-crafts-server-green.vercel.app/crafts/${_id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              
              const remainingCrafts = crafts.filter((craft) => craft._id !== _id);
              setCrafts(remainingCrafts);
              swalWithBootstrapButtons.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            });

        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your imaginary file is safe :)",
            icon: "error",
          });
        }
      });
  };

  useEffect(()=>{
      window.scroll(0,0)
    },[]) 

  return (
    <div className="w-[70%] mx-auto mb-24">
       <Helmet> <title> A&C | My Art&Crafts </title> </Helmet> 
      <h1 className="my-14 text-font text-3xl md:text-5xl text-center">
        My Arts&Crafts
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
                    <span className="font-medium ">Ratings:</span>{" "}
                    {craft.ratings}
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
                    to={`https://art-crafts-application.web.app/crafts/viewDetails/${craft._id}`}
                  >
                    <button className="btn button w-full mt-4">View</button>
                  </Link>
                  <Link to={`/updateMyCrafts/${craft._id}`}>
                    <button className="btn button w-full mt-1">
                      Update data
                    </button>
                  </Link>

                  <button
                    onClick={() => handleDelete(craft._id)}
                    className="btn button w-full mt-1"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
     
        ))}
      </div>
    </div>
  );
};

export default MyArtsCrafts;

import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../components/AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const AddCrafts = () => {
  const user = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data, event) => {
    const form = event.target;
    console.log(data);

    fetch("https://arts-crafts-server-green.vercel.app/crafts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        Swal.fire({
          title: "Your Art-Crafts Added successfully",
          icon: "success",
          draggable: true,
        });
        form.reset();
        console.log(result);
      });
  };

  useEffect(()=>{
      window.scroll(0,0)
    },[])
    

  return (
    <div className="md:w-[65%] mx-auto">
      <button
        onClick={() => navigate("/")}
        className="ml-6 mt-5 button flex gap-1 items-center btn"
      >
        <span>
          {" "}
          <FaArrowLeft></FaArrowLeft>{" "}
        </span>{" "}
        Back
      </button>
      <div className="flex flex-col gap-5 md:gap-10 justify-center items-center pt-5 px-8 mb-52">
        <h1 className="text-font font-bold text-2xl md:text-4xl md:pt-14">
          Add your art and crafts
        </h1>
        <div className="bg-[#F4F3F0] min-w-[350px] w-full rounded-lg flex flex-col justify-center items-center py-4">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-3 min-w-[350px] md:w-full  px-7 md:py-4 rounded-xl"
          >
            <div className="flex flex-col gap-4 md:gap-6 md:flex-row">
              <label className="w-full flex flex-col text-xl font-semibold text-font space-y-1">
                <span>Image</span>
                <input
                  {...register("imgURL", { required: true })}
                  className="input input-bordered input-md w-full font-medium "
                  placeholder="Enter image URL"
                />

                {errors.imgURL && (
                  <span className="font-normal text-sm text-red-600">
                    This field is required
                  </span>
                )}
              </label>
              <label className="w-full flex flex-col text-xl font-semibold text-font space-y-1">
                <span>Item Name</span>
                <input
                  {...register("itemName", { required: true })}
                  className="input input-bordered input-md w-full font-medium "
                  placeholder="Enter item name"
                />

                {errors.itemName && (
                  <span className="font-normal text-sm text-red-600">
                    This field is required
                  </span>
                )}
              </label>
            </div>
            <div className="flex flex-col gap-4 md:gap-6 md:flex-row">
              <label className="w-full flex flex-col text-xl font-semibold text-font space-y-1">
                <span>Subcategory Name</span>
                <div className="flex flex-row-reverse items-center ">
                  {/* <input
                  {...register("subcategory", { required: true })}
                  className="input input-bordered input-md w-full font-medium "
                  placeholder="Enter subcategory name"
                /> */}
                  {/* <IoIosArrowDown tabIndex={0} role="button" className="font-light text-3xl relative right-0 cursor-pointer "></IoIosArrowDown> */}
                  <select
                    className="input input-bordered input-md w-full font-medium "
                    {...register("subcategory", { required: true })}
                  >
                    <option>-- Select One --</option>
                    <option value="Landscape Painting">
                      Lanscape Painting
                    </option>
                    <option value="Portrait Drawing">Portrait Drawing</option>
                    <option value="Water Color Painting">
                      Water color Painting
                    </option>
                    <option value="Oil Painting">Oil Painting</option>
                    <option value="Charcoal Sketching">
                      Charcoal Sketching
                    </option>
                    <option value="Cartoon Drawing">Cartoon Drawing</option>
                  </select>
                </div>

                {errors.subcategory && (
                  <span className="font-normal text-sm text-red-600">
                    This field is required
                  </span>
                )}
              </label>
              <label className="w-full flex flex-col text-xl font-semibold text-font space-y-1">
                <span>Stock Status</span>
                <input
                  {...register("stockStatus", { required: true })}
                  className="input input-bordered input-md w-full font-medium "
                  placeholder="In stock/Made to order"
                />

                {errors.stockStatus && (
                  <span className="font-normal text-sm text-red-600">
                    This field is required
                  </span>
                )}
              </label>
            </div>
            <div className="flex flex-col gap-4 md:gap-6 md:flex-row">
              <label className="w-full flex flex-col text-xl font-semibold text-font space-y-1">
                <span>Price</span>
                <input
                  {...register("price", { required: true })}
                  className="input input-bordered input-md w-full font-medium "
                  placeholder="$ Enter product price"
                />

                {errors.price && (
                  <span className="font-normal text-sm text-red-600">
                    This field is required
                  </span>
                )}
              </label>
              <label className="w-full flex flex-col text-xl font-semibold text-font space-y-1">
                <span>Ratings</span>
                <input
                  {...register("ratings", { required: true })}
                  type="number"
                  className="input input-bordered input-md w-full font-medium "
                  placeholder="Enter product ratings(maximum 5.0)"
                />

                {errors.ratings && (
                  <span className="font-normal text-sm text-red-600">
                    This field is required
                  </span>
                )}
              </label>
            </div>
            <div className="flex flex-col gap-4 md:gap-6 md:flex-row">
              <label className="w-full flex flex-col text-xl font-semibold text-font space-y-1">
                <span>Customization</span>
                <input
                  {...register("customization", { required: true })}
                  className="input input-bordered input-md w-full font-medium "
                  placeholder="Yes/No"
                />

                {errors.customization && (
                  <span className="font-normal text-sm text-red-600">
                    This field is required
                  </span>
                )}
              </label>
              <label className="w-full flex flex-col text-xl font-semibold text-font space-y-1">
                <span>Processing Time</span>
                <input
                  {...register("processingTime", { required: true })}
                  className="input input-bordered input-md w-full font-medium "
                  placeholder="Enter processing time"
                />

                {errors.processingTime && (
                  <span className="font-normal text-sm text-red-600">
                    This field is required
                  </span>
                )}
              </label>
            </div>
            <label className="flex flex-col text-xl font-semibold text-font space-y-1">
              <span>User Name</span>
              <input
                {...register("userName", { required: true })}
                className="input input-bordered input-md w-full font-medium "
                placeholder="Enter image URL"
                defaultValue={user.displayName}
              />

              {errors.userName && (
                <span className="font-normal text-sm text-red-600">
                  This field is required
                </span>
              )}
            </label>
            <label className="w-full flex flex-col text-xl font-semibold text-font space-y-1">
              <span>Email</span>
              <input
                {...register("email", { required: true })}
                type="email"
                className="input input-bordered input-md w-full font-medium "
                placeholder="example@gmail.com"
                defaultValue={user.user.email}
              />

              {errors.email && (
                <span className="font-normal text-sm text-red-600">
                  This field is required
                </span>
              )}
            </label>

            <label className="w-full flex flex-col text-xl font-semibold text-font space-y-1">
              <span>Short Description</span>
              <textarea
                placeholder="Enter short description"
                className="textarea textarea-bordered textarea-lg font-medium w-full "
                {...register("shortDes", { required: true })}
              ></textarea>

              {errors.shortDes && (
                <span className="font-normal text-sm text-red-600">
                  This field is required
                </span>
              )}
            </label>
            <input type="submit" className="btn bg-[#c9b99d] mt-9" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCrafts;

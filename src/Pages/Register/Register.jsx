import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
// import { AuthContext } from "../../components/AuthProvider/AuthProvider";

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
//   const { createUser } = useContext(AuthContext);
  const [showPssword, handleShowPasssword] = useState(false);

  const navigate = useNavigate();

  const handleRegister = (data) => {

    const { email, password } = data;

    createUser(email, password)
    .then((result) => {
        console.log(result);
        const createdTime = result.user?.metadata?.creationTime
        const user = {createdTime,email}
        fetch("https://coffee-master-server-psi.vercel.app/users", {
          method: "POST",
          mode: "cors",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((result) => console.log(result));
           navigate("/signIn");
      })
    .catch((error) => {
        console.log(error.message);
      });
  };

  const handlePassword = (e)=>{
    const password = e.target.value
    console.log(password);
    
    if (password.length < 6) {
        toast.warn('password length must be 6 !');
            return
    }
    else if (!/[A-Z]/.test(password)) {
        toast.warn('at least one UpperCase latter');
        return

    }
    else if (!/[a-z]/.test(password)) {
        toast.warn('at least one lowerCase letter');
            return
    }
    else{
        toast.success('password is good to go now',);
            return
    }
  }

  useEffect(() => {
    window.scroll(0, 0);
  });

  return (
    <div className="flex flex-col justify-center items-center mx-auto ">
      <h1 className="mt-10 lg:mt-16 mb-6 text-4xl md:text-5xl lg:text-5xl font-bold">
        Register Now !
      </h1>
      <form
        action=""
        onSubmit={handleSubmit(handleRegister)}
        className="flex flex-col gap-5 min-w-[350px] md:w-1/3 lg:w-1/3 px-5 py-10 mx-3 border border-red-600 rounded-xl"
      >
        <div>
          <h2 className="text-lg font-semibold mb-1">Your name</h2>
          <input
            type="text"
            name="name"
            {...register("name", { required: true })}
            placeholder="Enter name"
            className="input input-bordered input-md w-full "
          />
          {errors.name && (
            <span className="text-red-600">*Please enter your name</span>
          )}
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-1">Your Email</h2>
          <input
            type="email"
            name="email"
            {...register("email", { required: true })}
            placeholder="Enter email"
            className="input input-bordered input-md w-full "
          />
          {errors.email && (
            <span className="text-red-600">*Please enter your email</span>
          )}
        </div>
        <div className="flex flex-col">
          <h2 className="text-lg font-semibold mb-1">Your Password</h2>
          <div className="flex items-center justify-between relative">
            <input
              type={showPssword ? "text" : "password"}
              name="password"
              onKeyUp={handlePassword}
              {...register("password", { required: true })}
              placeholder="Enter password"
              className="input input-bordered input-md w-full "
            />
            <span
              onClick={() => handleShowPasssword(!showPssword)}
              className="absolute right-4 cursor-pointer text-xl"
            >
              {showPssword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
            </span>
          </div>
          {errors.password && (
            <span className="text-red-600">*Please enter your password</span>
          )}
        </div>
        <label>
          <input type="checkbox" checked /> Accept our
          <a href="#" className="italic underline text-blue-500">
            terms and condition
          </a>
        </label>

        <input className="btn" type="submit" value={"Register"} />
      </form>
      <p className="font-semibold text-lg">
        Alraedy have an account? Please{" "}
        <NavLink to={"/logIn"} className="text-blue-600 font-semibold text-xl">
          LogIn
        </NavLink>
      </p>
       <div>
        <ToastContainer
          position="top-right"
          autoClose={1800}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition:Bounce
        />
      </div>
    </div>
  );
};

export default Register;

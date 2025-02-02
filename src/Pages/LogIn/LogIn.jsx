import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext, useEffect, useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../components/AuthProvider/AuthProvider";
import { BsGithub } from "react-icons/bs";
import Swal from 'sweetalert2'
import { Helmet } from "react-helmet-async";

const LogIn = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const { logIn ,googleLogIn,gitHubLogIn } = useContext(AuthContext);
  const [showPssword, setShowPasssword] = useState(false);
  const location = useLocation()
  const navigate = useNavigate();

  const handleLogIn = (data) => {
    const { email, password } = data;

    logIn(email, password)
      .then((result) => {
        Swal.fire({
                    title: "Registered Successfully",
                    icon: "success",
                    draggable: true
                  });
        navigate("/");
        console.log(result);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleGoogleLogIn=(e)=>{
    e.preventDefault();

    googleLogIn()
    .then(result=>{
      navigate(location?.state? location.state : "/");
      console.log(result);
    })
    .catch(error=>{
      console.log(error.message);
      
    })
  }
    const handleGitHublogIn =(e)=>{
      e.preventDefault();
      
      gitHubLogIn()
      .then(result=>{
        navigate(location?.state? location.state : "/");
        console.log(result);
      })
      .catch(error=>{
        console.log(error.message);
        
      })
    }
  
    useEffect(() => {
      window.scroll(0, 0);
    });
  return (
    <div>
      <Helmet> <title> A&C | LogIn </title> </Helmet> 
      <div className="flex flex-col justify-center items-center mx-auto ">
        <h1 className="mt-10 lg:mt-16 mb-6 text-4xl md:text-5xl lg:text-5xl font-bold">
          Sign In
        </h1>
        <form
          action=""
          onSubmit={handleSubmit(handleLogIn)}
          className="flex flex-col gap-5 min-w-[350px] md:w-1/3 lg:w-1/3 px-5 py-10 mx-3 border border-red-600 rounded-xl"
        >
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
          <div>
            <h2 className="text-lg font-semibold mb-1">Your Password</h2>
            <div className="flex items-center justify-between relative">
              <input
                type={showPssword ? "text" : "password"}
                name="password"
                {...register("password", { required: true })}
                placeholder="Enter password"
                className="input input-bordered input-md w-full"
              />
              <span
                onClick={() => setShowPasssword(!showPssword)}
                className="absolute right-4 cursor-pointer text-xl"
              >
                {showPssword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
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

          <input className="btn" type="submit" value={"Log In"} />
        </form>
        <p className="font-semibold text-lg">
          Alraedy have an account? Please{" "}
          <NavLink
            to={"/register"}
            className="text-blue-600 font-semibold text-xl"
          >
            Register
          </NavLink>
        </p>


      <div className="min-w-[350px] space-y-4 md:w-1/3 lg:w-1/3 py-16">

        <button onClick={handleGoogleLogIn} className=" w-full flex gap-5 btn items-center text-lg font-normal ">
            <FaGoogle className="text-2xl"></FaGoogle>
            <span>Google LogIn</span> 
        </button>
        <button onClick={handleGitHublogIn} className="w-full flex gap-5 btn items-center text-lg font-normal">
          <BsGithub className="text-2xl"></BsGithub>
          <span>GitHub LogIn</span> 
        </button>
      </div>
        
      </div>
    </div>
  );
};

export default LogIn;

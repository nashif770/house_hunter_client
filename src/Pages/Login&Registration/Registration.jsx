import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../0.providers/AuthProvider";
import swal from "sweetalert";
import SocialLogin from "./SocialLogin/SocialLogin";

const Registration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    console.log("email", data.email);
    console.log("name", data.name);

    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log("loggedUser", loggedUser);
      updateUserProfile(data.name)
        .then(() => {
          console.log("user profile updated");
          const saveUser = { name: data.name, email: data.email };
          fetch("http://localhost:5000/users", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(saveUser),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                reset();
                swal({
                  title: "Welcome",
                  text: "Registerd in Successfully",
                  icon: "success",
                  button: "Procced",
                });
                navigate("/");
              }
            });
        })
        .catch((error) => console.log(error)); //can add more
    });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center md:w-1/2 lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card shrink-0 w-full md:w-1/2 max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">name</span>
              </label>
              <input
                type="texts"
                name="name"
                placeholder="Type Your Name Here"
                className="input input-bordered"
                {...register("name", { required: true })}
                required
              />
              {errors.name && (
                <span className="text-red-600 mt-3">
                  This field is required
                </span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Role</span>
              </label>
              <input
                type="texts"
                name="role"
                placeholder="Select a Role"
                className="input input-bordered"
                {...register("role", { required: true })}
                required
              />
              {errors.role && (
                <span className="text-red-600 mt-3">
                  This field is required
                </span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone Number</span>
              </label>
              <input
                type="number"
                name="number"
                placeholder="Phone Number"
                className="input input-bordered"
                {...register("role", { required: true })}
                required
              />
              {errors.number && (
                <span className="text-red-600 mt-3">
                  This field is required
                </span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Type Your Email Here"
                className="input input-bordered"
                {...register("email", { required: true })}
                required
              />
              {errors.email && (
                <span className="text-red-600 mt-3">
                  This field is required
                </span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                })}
                required
              />
              {errors.password?.type === "required" && (
                <span className="text-red-600 mt-3">
                  This field is required
                </span>
              )}
              {errors.password?.type === "minLength" && (
                <span className="text-red-600 mt-3">
                  Password must be at least 6 characters
                </span>
              )}
              {errors.password?.type === "maxLength" && (
                <span className="text-red-600 mt-3">
                  Password must be less than 20 characters
                </span>
              )}
            </div>
            <div className="form-control mt-6">
              <input
                type="submit"
                className="btn btn-primary"
                value="Register"
              />
            </div>
          </form>
          <p className="my-6 m-auto">
            Already Have an Account?{" "}
            <Link to={"/login"} className="text-blue-900">
              Sign In
            </Link>
          </p>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default Registration;

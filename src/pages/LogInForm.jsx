import React, { useState } from "react";
import { useForm } from "react-hook-form";
import logIn from "../../public/login.avif";
import { toast } from "react-toastify";

function LogInForm() {
  const {
    register,
    //handleSubmit() is provided by react-hook-form
    // It validates all fields first
    // If everything is ✅ valid, it runs your onSubmit function
    handleSubmit,
    // The watch function lets you observe (or “watch”) the value of input fields in real-time as the user types.
    //You use watch when:
    // You want to get the current value of a form input field at any time
    // You need to show/hide inputs based on user choices
    // You want to conditionally validate or display data
    // watch,
    //formState is an object that contains the current state of the form
    //errors, isDirty, isSubmitting,isValid
    formState: { errors },
  } = useForm();

  function onSubmit1() {
    toast.success("LogIn successfully!");
  }
  function onSubmit2() {
    toast.success("Sign Up successfully!");
  }
  const [logInState, setLogInState] = useState(true);

  function SignIn() {
    setLogInState(!logInState);
  }

  function toggleForm() {
    setLogInState(!logInState);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <div className="w-full max-w-4xl flex rounded-lg overflow-hidden shadow-2xl">
        <div className="w-2/3 p-8">
          <h1 className="text-3xl font-bold text-black mb-2">
            {logInState ? "Log In" : "Sign Up"}
          </h1>
          <p className="text-sm text-black mb-4">
            or{" "}
            <span
              className="text-[#ff5200] cursor-pointer font-semibold"
              onClick={toggleForm}
            >
              {logInState ? "create an account" : "login to your account"}
            </span>
          </p>

          {logInState && (
            <form onSubmit={handleSubmit(onSubmit1)}>
              <input
                type="tel"
                placeholder="Phone number"
                {...register("phone", {
                  required: "Enter your number",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Enter a valid 10-digit phone number",
                  },
                })}
                className="border border-gray-300 p-3 w-full outline-none"
              />
              {errors.phone && (
                <p className="text-red-500 font-semibold text-sm">
                  {errors.phone.message}
                </p>
              )}

              <button
                type="submit"
                className="w-full mt-4 cursor-pointer bg-orange-600 text-white py-3 font-semibold rounded hover:shadow-md"
              >
                LOGIN
              </button>
              <p className="text-xs text-gray-700 mt-2">
                By creating an account, I accept the{" "}
                <span className="font-bold">
                  Terms & Conditions & Privacy Policy
                </span>
              </p>
            </form>
          )}

          {!logInState && (
            <form className="space-y-4" onSubmit={handleSubmit(onSubmit2)}>
              <input
                type="tel"
                placeholder="Phone number"
                {...register("phone", {
                  required: "Enter your number",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Enter a valid 10-digit phone number",
                  },
                })}
                className="border border-gray-300 p-3 w-full outline-none"
              />
              {errors.phone && (
                <p className="text-red-500 font-semibold text-sm">
                  {errors.phone.message}
                </p>
              )}

              <input
                type="text"
                placeholder="Name"
                {...register("name", {
                  required: "Enter your name",
                  pattern: {
                    value: /^[a-z\s]+$/i,
                    message: "Only alphabets are not allowed",
                  },
                })}
                className="border border-gray-300 p-3 w-full outline-none"
              />
              {errors.name && (
                <p className="text-red-500 font-semibold text-sm">
                  {errors.name.message}
                </p>
              )}

              <input
                type="email"
                placeholder="Email"
                {...register("email", {
                  required: "Enter your Email Id",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email address",
                  },
                })}
                className="border border-gray-300 p-3 w-full outline-none"
              />
              {errors.email && (
                <p className="text-red-500 font-semibold text-sm">
                  {errors.email.message}
                </p>
              )}

              <p className="text-blue-500 cursor-pointer text-sm">
                Have a referral code?
              </p>

              <button
                type="submit"
                className="w-full bg-orange-600 text-white py-3 font-semibold rounded hover:shadow-md"
              >
                CONTINUE
              </button>

              <p className="text-xs text-gray-700 mt-[-10px]">
                By creating an account, I accept the{" "}
                <span className="font-bold">
                  Terms & Conditions & Privacy Policy
                </span>
              </p>
            </form>
          )}
        </div>

        <div className="w-1/3 bg-gray-100 flex items-center justify-center">
          <img src={logIn} alt="Login" className="w-48" />
        </div>
      </div>
    </div>
  );
}

export default LogInForm;

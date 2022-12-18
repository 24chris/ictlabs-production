import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Link } from "react-router-dom";

const LoginPage = () => {
  let { loginUser } = useContext(AuthContext);
  return (
    <div>
      <form onSubmit={loginUser}>
        <section className="flex flex-col mt-6">
          <div className="login-box w-full md:mx-auto relative z-100">
            <div className="box shadow-2xl max-w-xl mx-auto rounded-md p-14 z-100">
              <h2 className="text-2xl font-bold mb-8 text-gray-600">
                User Login
              </h2>

              <div className="mb-8">
                <p className="text-md text-gray-500 mb-2">Email</p>
                <input
                  type="email"
                  name="email"
                  className="border w-full rounded-md border-gray-300 py-2"
                />
              </div>
              <div className="mb-8">
                <div className="flex flex-col sm:flex-row sm:justify-between">
                  <p className="text-md text-gray-500 mb-2">Password</p>
                </div>
                <input
                  type="password"
                  className="border w-full rounded-md border-gray-300 py-2"
                  name="password"
                />
                <a href="#" className="text-md mb-2 text-red-600">
                  Forgot your password?
                </a>
              </div>

              <input
                className="w-full bg-red-500 py-2 rounded-md text-gray-50"
                type="submit"
                value="Login"
              />

              <div className="max-w-xl mx-auto">
                <p className="text-sm mt-8 ml-8">
                  Dont have an account?{" "}
                  <Link to="/register" className="text-red-500">
                    Register
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </form>
    </div>
  );
};

export default LoginPage;

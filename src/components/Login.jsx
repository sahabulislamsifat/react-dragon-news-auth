import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const { userLogIn, setUser } = useContext(AuthContext);

  const [error, setError] = useState({});

  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log({ email, password });

    userLogIn(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        setError({ ...error, login: err.code });
      });
  };

  return (
    <div className="min-h-screen justify-center items-center flex">
      <div className="card rounded-none bg-slate-200 w-full max-w-lg shrink-0 p-16">
        <h2 className="text-2xl font-semibold text-center">
          Login Your Account
        </h2>
        <form onSubmit={handleLogin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />

            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>

            {error.login && (
              <p className="text-sm text-red-600">{error.login}</p>
            )}
          </div>
          <div className="form-control mt-6">
            <button className="btn rounded-none btn-neutral">Login</button>
          </div>
        </form>
        <p className="text-center font-semibold">
          Don't Have An Account ?{" "}
          <Link to={"/auth/register"} className="text-red-600">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import GoogleLogin from "../components/Login-Registration/GoogleLogin";
import useAuth from "../hooks/useAuth";

const SignUp = () => {
  const { createUser, user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  const [msg, setMsg] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const cPassword = form.cpassword.value;
    console.log(email, password, cPassword);
    if (password === cPassword) {
      setMsg("");
      createUser(email, password).then((result) => {
        const email = result.user.email;
        const userInfo = { email, name };
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(userInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            localStorage.setItem("token", data.token);
          });
      });
      form.reset();
    } else {
      setMsg("Passwords didn't match!");
    }
  };

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [from, navigate, user]);

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSignUp} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
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
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                name="cpassword"
                placeholder="confirm password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
            <p className="text-red-500 font-bold">{msg}</p>
            <p>
              Have an account?{" "}
              <Link className="text-blue-600" to={"/login"}>
                Login
              </Link>
            </p>
          </form>
          <div className="card-body">
            <GoogleLogin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

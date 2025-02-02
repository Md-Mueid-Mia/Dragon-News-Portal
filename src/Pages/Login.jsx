import  { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const {userLogin, setUser}=useContext(AuthContext)
  const [error, setError]= useState({})
  const location = useLocation()
  const navigate = useNavigate();

  const handleSubmit = e =>{
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get('email');
    const password = form.get('password');
    
    // console.log(email,password);

    userLogin(email, password)
    .then(result => {
      const user = result.user;
      setUser(user)
      navigate(location?.state ? location.state : '/')
    })
    .catch(err => {
      setError({...error , login: err.code})
    })
  }
  return (
    <div className="min-h-[calc(100vh-120px)] flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-md shrink-0 rounded-none p-10 border">
        <h2 className="text-3xl font-semibold text-center pt-5">Login Your Account</h2>
        <div className="divider"></div>
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
            name="email"
              type="email"
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
            name="password"
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            {
              error.login && <p className="text-red-500 mt-2">{error.login}</p>
            }
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral rounded-none" >Login</button>
          </div>
        </form>
        <p className="text-center font-semibold">Dont’t Have An Account ? <Link to={'/auth/register'} className="text-red-500">Register</Link></p>
      </div>
    </div>
  );
};

export default Login;

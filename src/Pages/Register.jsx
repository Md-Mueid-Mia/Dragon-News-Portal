import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
    const {createNewUser, setUser, updateUserProfile}= useContext(AuthContext)
    const [error, setError]=useState({})
    const navigate = useNavigate();

    const handleSubmit = e =>{
        e.preventDefault();
        setError({})
        const form = new FormData(e.target);
        const name = form.get('name');
        if(name.length < 5){
          setError({...error,name: 'Name must be at least 5 characters long.'})
        }
        const photo = form.get('photo')
        const email = form.get('email');
        
        const password = form.get('password');
        if(password.length < 6){
          setError({...error,password: 'Password must be at least 6 characters long.'})
        }
        // console.log(name,photo, email, password);

        createNewUser(email, password)
        .then(result=>{
            const user = result.user;
            console.log(user);
            setUser(user)
            updateUserProfile({displayName:name, photoURL: photo})
            .then(() => {
              // console.log('Profile updated successfully');
              navigate('/')
            })
            .catch(error => {
              // console.error('Error updating profile:', error);
            })
        })
        .catch(error=>{
            // console.log(error.code);
        })
    }
  return (
    <div className="min-h-[calc(100vh-80px)] flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl rounded-none">
        <h2 className="font-semibold text-3xl py-5 text-center">
          Register your account
        </h2>
        <div className="divider"></div>
        <form onSubmit={handleSubmit} className="card-body pt-0">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="Enter your name"
              className="input input-bordered"
              required
            />
            {
              error.name && <p className="text-red-500">{error.name}</p>
            }
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              name="photo"
              type="text"
              placeholder="Enter your photo url"
              className="input input-bordered"
              required
            />
          </div>
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
            {
              error.email && <p className="text-red-500">{error.email}</p>
            }
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
              error.password && <p className="text-red-500">{error.password}</p>
            }
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral rounded-none">Register</button>
          </div>
        </form>
        <p className="font-semibold text-center pb-5">
          Already Have An Account ?{" "}
          <Link className="text-red-500" to={"/auth/Login"}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;

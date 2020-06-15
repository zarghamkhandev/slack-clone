import React, { Component } from "react";
import { FaPuzzlePiece, FaUserAlt, FaLock } from "react-icons/fa";
import { BsArrowClockwise } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
class Register extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  };

  changeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div className="flex items-center h-screen justify-center bg-gray-100">
        <div className="w-full max-w-sm ">
          <div className="text-center py-2">
            <FaPuzzlePiece size={75} className="text-orange-600 inline-block" />
            <h1 className="text-orange-600 font-medium text-2xl">
              Register for DevChat
            </h1>
          </div>
          <form
            className="p-4 bg-white rounded shadow pb-5 mb-4"
            autoComplete="off"
          >
            <div className="relative mb-2">
              <FaUserAlt className="text-gray-600 absolute inset-y-0 left-0 my-auto ml-2" />
              <input
                onChange={this.changeHandler}
                placeholder="Username"
                type="text"
                id="username"
                name="username"
                className="w-full pl-8 border border-gray-500 py-2 rounded focus:outline-none"
              />
            </div>
            <div className="relative mb-2">
              <MdEmail className="text-gray-600 absolute inset-y-0 left-0 my-auto ml-2" />
              <input
                onChange={this.changeHandler}
                placeholder="Email Address"
                type="email"
                id="email"
                name="email"
                className="w-full pl-8 border border-gray-500 py-2 rounded focus:outline-none"
              />
            </div>
            <div className="relative mb-2">
              <FaLock className="text-gray-600 absolute inset-y-0 left-0 my-auto ml-2" />
              <input
                onChange={this.changeHandler}
                placeholder="Password"
                type="password"
                id="password"
                name="password"
                className="w-full pl-8 border border-gray-500 py-2 rounded focus:outline-none"
              />
            </div>
            <div className="relative mb-2">
              <BsArrowClockwise
                className="text-gray-600 absolute inset-y-0 left-0 my-auto ml-2"
                size={20}
                strokeWidth={0.5}
              />
              <input
                onChange={this.changeHandler}
                placeholder="Password Confirmation"
                type="password"
                id="passwordConfirmation"
                name="passwordConfirmation"
                className="w-full pl-8 border border-gray-500 py-2 rounded focus:outline-none"
              />
            </div>
            <button className="py-2 w-full bg-orange-600 rounded text-white font-medium">
              Submit
            </button>
          </form>
          <div className="w-full py-2 text-center border border-gray-300 rounded bg-white">
            <p>
              Already a user?{" "}
              <Link to="/login">
                <span className="text-blue-600 font-medium hover:underline">
                  Login
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;

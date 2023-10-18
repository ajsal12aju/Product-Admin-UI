import React from "react";
import "./login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      <div className="container tm-mt-big tm-mb-big">
        <div className="row" style={{ marginTop: "100px" }}>
          <div className="col-12 mx-auto tm-login-col">
            <div className="tm-bg-primary-dark tm-block tm-block-h-auto">
              <div className="row">
                <div className="col-12 mx-auto">
                  <h2 className="tm-block-title mb-4">Welcome to Login</h2>
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-12">
                  <form action="index.html" method="post" className="">
                    <div className="form-group">
                      <label htmlFor="username">User Name</label>
                      <input
                        type="text"
                        name="username"
                        className="form-control validate"
                        id="username"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <input
                        type="text"
                        name="password"
                        className="form-control validate"
                        id="password"
                        required
                      />
                    </div>
                    <div className="form-group mt-4">
                      <Link to="/home">
                        <button
                          type="submit"
                          className="btn btn-primary btn-block text-uppercase"
                        >
                          Login
                        </button>
                      </Link>
                    </div>
                    <div className="form-group mt-4">
                      <button
                        type="submit"
                        className="btn btn-primary btn-block text-uppercase"
                      >
                        Forgot Your Password
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

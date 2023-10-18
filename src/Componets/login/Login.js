import React from "react";
import "./login.css";

function Login() {
  return (
    <div>
      welcome to login
      <div className="container tm-mt-big tm-mb-big">
        <div className="row">
          <div className="col-12 mx-auto tm-login-col">
            <div className="tm-bg-primary-dark tm-block tm-block-h-auto">
              <div className="row">
                <div className="col-12 text-center">
                  <h2 className="tm-block-title mb-4">
                    Welcome to Dashboard , Login
                  </h2>
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
                        value
                        required
                      />
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

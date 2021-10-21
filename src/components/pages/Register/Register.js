import React from "react";
import "./Register.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

function Register() {
  const { signInUsingGoogle } = useAuth();

  return (
    <div>
      <div className="container">
        <div className="row w-50 mx-auto">
          <div className="col-md-12">
            <div className="p-3 custom-border mt-3">
              <form>
                <h3 className="text-dark text-center custom-m">Create an account</h3>

                <div className="mb-3">
                  <input type="text" className="form-control" placeholder="Full Name" />
                </div>

                <div className="mb-3">
                  <input type="email" className="form-control" placeholder="Username or Email" />
                </div>
                <div className="mb-3">
                  <input type="password" className="form-control" placeholder="Password" />
                </div>

                <button type="submit" className="btn btn-primary form-control">
                  Create an account
                </button>
              </form>
              <br />

              <p className="text-dark text-center">
                Already have an account? <Link to="/login">Login</Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="text-center">
              <br />
              <p className="text-dark">-------------------- OR --------------------</p>
              <button onClick={() => signInUsingGoogle()} className="btn btn-primary">
                <FontAwesomeIcon icon={faGoogle} className="fs-5" id="custom-fa" /> Continue with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;

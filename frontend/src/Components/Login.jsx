import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Signup_Login.css";


const Login = () => {
  const [mobile, setMobile] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const [passwordVisible, setPasswordVisible] = useState(false); 
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible); 
  };

 

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("https://auth-pages-delta.vercel.app/users/login", { mobile, password })
      .then((result) => {
        console.log(result);
        if (result.data === "Success") {
          console.log("Login Success");
          alert("Login successful!");
          navigate("/home");
        } else {
          alert("Incorrect password! Please try again.");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="background">
        <div className="container">
          <div class="row justify-content-center">
            <div class="col-md-6">
              <div className="login-form">
                <h2 className="colortwo">Login</h2>
                <p className="text-center">Enter your credentials to login</p>
                <form onSubmit={handleSubmit}>
                  <div className="form-group p-2">
                    <input
                      type="text"
                      className="form-control"
                      name="mobileNumber"
                      id="InputMobile"
                      onChange={(event) => setMobile(event.target.value)}
                      placeholder="Mobile Number"
                      required
                    />
                  </div>
                  <div className="form-group p-2">
                    <input
                      type={passwordVisible ? "text" : "password"}
                      className="form-control"
                      name="password"
                      id="InputPassword"
                      onChange={(event) => setPassword(event.target.value)}
                      placeholder="Password"
                      required
                    />
                    <span
                      className="toggle-password-login"
                      onClick={togglePasswordVisibility}
                    >
                      {passwordVisible ? (
                        <i className="fas fa-eye"></i>
                      ) : (
                        <i className="fas fa-eye-slash"></i>
                      )}
                    </span>
                  </div>
                  <div className="form-group p-2">
                    <button type="submit" className="btn btn-primary btn-block">
                      Login
                    </button>
                  </div>
                </form>
                <p className="ms-2">Don't have an account?</p>

                <Link to="/signup" className="btn btn-link buttontwo">
                  Signup
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

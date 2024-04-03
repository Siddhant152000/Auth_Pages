import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Signup = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = (event) => {

    console.log(fname)
    event.preventDefault();
    if (!validateMobile(mobile) || !validateEmail(email) || !validateDOB(dob)) {
      return;
    }

    const lastFourDigits = mobile.slice(-4);
    const randomFourDigits = Math.floor(1000 + Math.random() * 9000);
    const chosenPassword = password === "randomFourDigits" ? randomFourDigits.toString() : lastFourDigits.toString();

    axios
      .post("https://auth-pages-delta.vercel.app/users/signup", {
        fname,
        lname,
        email,
        password: chosenPassword,
        mobile,
        address,
        dob,
        gender,
      })
      .then((result) => {
        console.log(result);
        if (result.data === "Already registered") {
          alert("E-mail already registered! Please Login to proceed.");
          navigate("/login");
        } else {
          alert("Registered successfully! Your Password is last four digit of mobile no.");
          navigate("/login");
        }
      })
      .catch((err) => console.log(err));
  };

  const validateMobile = (mobile) => {
    const mobileRegex = /^[6-9]\d{9}$/;
    if (!mobileRegex.test(mobile)) {
      alert("Please enter a valid 10-digit mobile number starting with 6, 7, 8, or 9");
      return false;
    }
    return true;
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address");
      return false;
    }
    return true;
  };

  const validateDOB = (dob) => {
    if (!dob) {
      alert("Please select your date of birth");
      return false;
    }
    
    const currentDate = new Date();
    const selectedDate = new Date(dob);
    if (selectedDate >= currentDate) {
      alert("Date of birth cannot be the current date or a future date");
      return false;
    }
    
    return true;
  };

  return (
    <>
      <div className="background">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="signup-form">
                <h2 className="colorone">Sign Up</h2>
                <p className="text-center">Create your account</p>
                <form onSubmit={handleSubmit}>
                  <div className="form-group p-2">
                    <input
                      type="text"
                      className="form-control"
                      name="firstName"
                      id="Inputfname"
                      onChange={(event) => setFname(event.target.value)}
                      placeholder="First Name"
                      value={fname}
                      required
                    />
                  </div>
                  <div className="form-group p-2">
                    <input
                      type="text"
                      className="form-control"
                      name="lastName"
                      id="Inputlname"
                      onChange={(event) => setLname(event.target.value)}
                      placeholder="Last Name"
                      required
                    />
                  </div>
                  <div className="form-group p-2">
                    <input
                      type="text"
                      className="form-control"
                      name="mobileNumber"
                      id="Inputmobile"
                      onChange={(event) => setMobile(event.target.value)}
                      placeholder="Mobile Number"
                      required
                    />
                  </div>
                  <div className="form-group p-2">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="Inputemail"
                      onChange={(event) => setEmail(event.target.value)}
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div className="form-group p-2">
                    <select
                      className="form-control"
                      name="gender"
                      id="Inputgender"
                      onChange={(event) => setGender(event.target.value)}
                      required
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="form-group p-2">
                    <input
                      type="date"
                      className="form-control"
                      name="dob"
                      id="Inputdob"
                      onChange={(event) => setDob(event.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group p-2">
                    <input
                      type="text"
                      className="form-control"
                      name="address"
                      id="Inputaddress"
                      onChange={(event) => setAddress(event.target.value)}
                      placeholder="Address"
                    />
                  </div>
                  <div className="form-group p-2">
                    <input
                      type={passwordVisible ? "text" : "password"}
                      placeholder="Enter Password"
                      className="form-control"
                      id="InputPassword"
                      onChange={(event) => setPassword(event.target.value)}
                      required
                    />
                    <span
                      className="toggle-password-signup"
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
                      Signup
                    </button>
                  </div>
                </form>
                <p className="ms-2 ">Already have an account?</p>
                <Link to="/login" className="btn btn-link buttonone">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;




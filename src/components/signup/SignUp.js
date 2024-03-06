import { useState } from "react";

import Footer from "../Layout/Footer";
import NavBar from "../Layout/NavBar";
import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css";
import getItemFromLocalStorage from "../hook/getItemFromLocalStorage";
import setItemToLocalStorage from "../hook/setItemToLocalStorage";
import ValidateEmail from "../hook/ValidateEmail";
import isVietnamesePhoneNumberValid from "../hook/validatePhone";

const SignUp = () => {
  const userArr = getItemFromLocalStorage("userArr") || []; // Lấy thông tin người dùng từ LocalStorage
  const [error, setError] = useState("");
  const [enteredFullName, setEnteredFullName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredPhone, setEnteredPhone] = useState("");
  const navigate = useNavigate();
  const fullNameChangeHandler = (event) => {
    setEnteredFullName(event.target.value);
  };
  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };
  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };
  const phoneChangeHandler = (event) => {
    setEnteredPhone(event.target.value);
  };

  const SubmitHandler = (event) => {
    event.preventDefault();
    setError(null); // render lại error mỗi lần submit lại
    // console.log(enteredFullName, enteredEmail, enteredPassword, enteredPhone);
    if (
      !enteredFullName ||
      !enteredEmail ||
      !enteredPassword ||
      !enteredPhone
    ) {
      // kiểm tra người dùng có nhập những thông tin này hay ko
      setError("Please fill all infomation !!");
      return;
    }

    if (enteredPassword.length < 8) {
      // Kiểm tra password phải ít nhất 8 ký tự
      setError("Password password must be minimum of 8 characters !!");
      return;
    }
    if (!ValidateEmail(enteredEmail)) {
      // Kiểm tra tính hợp lệ của email
      setError("Email is invalid !!");
      return;
    }
    for (let i = 0; i < userArr.length; i++) {
      if (userArr[i].email === enteredEmail) {
        setError("The email has been used, please change it to another email.");
        return;
      }
    }
    if (!isVietnamesePhoneNumberValid(enteredPhone)) {
      // gọi hàm kiểm tra tính hợp lệ của sđt
      setError(
        "Phone number must be 10 character and start with 03,05,07,08 or 09 !!"
      );
      return;
    }
    const userInfo = {
      name: enteredFullName,
      email: enteredEmail,
      password: enteredPassword,
      phone: enteredPhone,
    };
    userArr.push(userInfo);
    setItemToLocalStorage("userArr", userArr);

    navigate("/login"); // chuyển sang trang đăng nhập
    return true;
  };
  return (
    <div>
      <NavBar />
      <div className="form-background">
        <div className="form">
          <h2>Sign Up</h2>
          {error && <p className="error">{error}</p>}

          <form onSubmit={SubmitHandler}>
            <div>
              <input
                size={50}
                type="text"
                placeholder="Full Name"
                onChange={fullNameChangeHandler}
              ></input>
            </div>
            <div>
              <input
                size={50}
                type="text"
                placeholder="Email"
                onChange={emailChangeHandler}
              ></input>
            </div>
            <div>
              <input
                size={50}
                type="password"
                placeholder="Password"
                onChange={passwordChangeHandler}
              ></input>
            </div>
            <div>
              <input
                size={50}
                type="phone"
                placeholder="Phone"
                onChange={phoneChangeHandler}
              ></input>
            </div>
            <button>SIGN UP</button>
          </form>
          <div>
            <Link to="/login">Log in?</Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignUp;

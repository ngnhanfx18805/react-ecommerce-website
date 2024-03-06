import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import Footer from "../Layout/Footer";
import NavBar from "../Layout/NavBar";
import getItemFromLocalStorage from "../hook/getItemFromLocalStorage";
import setItemToLocalStorage from "../hook/setItemToLocalStorage";
import "./SignIn.css";
import { userActions } from "../../store/userRedux";
import { isLogedActions } from "../../store/isLoged";

const SignIn = () => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [error, setError] = useState(null);
  const userArr = getItemFromLocalStorage("userArr") || [];
  const dispatch = useDispatch();
  const emailOnChangedHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const passwordOnChangedHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const SignInCheck = () => {
    for (let i = 0; i < userArr.length; i++) {
      if (
        userArr[i].email === enteredEmail &&
        userArr[i].password === enteredPassword
      ) {
        // console.log("Đăng nhập thành công");
        setItemToLocalStorage("currentUser", userArr[i]);
        dispatch(userActions.ON_LOGIN(userArr[i])); // Cập nhật lại trạng thái userRedux
        dispatch(isLogedActions.ON_LOGIN());
        return userArr[i]; // thoát khỏi vòng for nếu đăng nhập đúng
      } else {
        //   console.log("Sai thông tin");
      }
    }
    return false;
  };

  const navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();
    setError(null);
    if (!enteredEmail || !enteredPassword) {
      //Kiểm tra xem có nhập đủ thông tin hay chưa
      setError("Plese fill all infomation !");
      return;
    }
    if (!SignInCheck()) {
      //Nếu sai thông tin thì hiển thị thông báo
      setEnteredPassword("");
      setError("Wrong infomation, please check again !!");
    } else {
      navigate("/"); // Sau khi đăng nhập thành công thì đưa người dùng quay lại trang trước đó
    }

    return;
  };

  return (
    <div>
      <NavBar />

      <div className="form-background">
        <div className="form">
          <h2>Sign In</h2>
          {error && <p className="error">{error}</p>}

          <form onSubmit={submitHandler}>
            <div>
              <input
                type="text"
                size={50}
                placeholder="Email"
                onChange={emailOnChangedHandler}
              ></input>
            </div>
            <div>
              <input
                type="password"
                size={50}
                placeholder="Password"
                value={enteredPassword}
                onChange={passwordOnChangedHandler}
              ></input>
            </div>
            <button>SIGN IN</button>
          </form>
          <div>
            Create an account? <Link to="/signup">Sign Up</Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignIn;

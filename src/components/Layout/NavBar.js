import { useNavigate } from "react-router-dom";
import classes from "./NavBar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../store/userRedux";
import { isLogedActions } from "../../store/isLoged";
import getItemFromLocalStorage from "../hook/getItemFromLocalStorage";

const NavBar = () => {
  const navigate = useNavigate();
  const submitHomeHandler = () => {
    navigate("/");
  };
  const submitShopHandler = () => {
    navigate("/shop");
  };
  const submitCartHandler = () => {
    navigate("/cart");
  };
  const submitLoginHandler = () => {
    navigate("/login");
  };

  let isLoged = useSelector((state) => state.isLoged.isLoged);
  let activeStyle = { color: "#f2cc99" };

  const currentUser = getItemFromLocalStorage("currentUser") || false;
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(userActions.ON_LOGOUT());
    dispatch(isLogedActions.ON_LOGOUT());
    localStorage.removeItem("currentUser");
  };
  return (
    <div className={classes.navbar}>
      <div className={classes.navbar1}>
        <button className={classes.btnHome} onClick={submitHomeHandler}>
          Home
        </button>
        <button onClick={submitShopHandler}>Shop</button>
      </div>
      <div>
        <h1>BOUTIQUE</h1>
      </div>
      <div className={classes.navbar1}>
        <button onClick={submitCartHandler}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="20"
            viewBox="0 0 30 30"
          >
            <path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm1.336-5l1.977-7h-16.813l2.938 7h11.898zm4.969-10l-3.432 12h-12.597l.839 2h13.239l3.474-12h1.929l.743-2h-4.195z" />
          </svg>{" "}
          Cart
        </button>
        {isLoged ? (
          <span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 30 30"
              >
                <path d="M20.822 18.096c-3.439-.794-6.64-1.49-5.09-4.418 4.72-8.912 1.251-13.678-3.732-13.678-5.082 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-3.073.71-3.188 2.236-3.178 4.904l.004 1h23.99l.004-.969c.012-2.688-.092-4.222-3.176-4.935z" />
              </svg>
              {currentUser.name}
            </span>
            <span onClick={logoutHandler} className={classes.logout}>
              Logout
            </span>
          </span>
        ) : (
          <button onClick={submitLoginHandler}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 30 30"
            >
              <path d="M20.822 18.096c-3.439-.794-6.64-1.49-5.09-4.418 4.72-8.912 1.251-13.678-3.732-13.678-5.082 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-3.073.71-3.188 2.236-3.178 4.904l.004 1h23.99l.004-.969c.012-2.688-.092-4.222-3.176-4.935z" />
            </svg>{" "}
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default NavBar;

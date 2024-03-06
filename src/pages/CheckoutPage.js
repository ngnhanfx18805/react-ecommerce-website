import { useSelector } from "react-redux";
import Footer from "../components/Layout/Footer";
import LiveChatIcon from "../components/Layout/LiveChat/LiveChatIcon";
import NavBar from "../components/Layout/NavBar";
import getItemFromLocalStorage from "../components/hook/getItemFromLocalStorage";
import priceFormat from "../components/hook/PriceFormat";
import "./CheckoutPage.css";
const CheckoutPage = () => {
  const currentUser = getItemFromLocalStorage("currentUser") || [];
  // console.log(currentUser);
  const listItemInCart = useSelector((state) => state.cart.listItem);
  // console.log("Đây là checkout:", listItemInCart);
  let cartTotal = 0;
  listItemInCart.forEach((element) => {
    cartTotal += element.quantity * element.price;
  });
  return (
    <div>
      <NavBar />
      <div className="checkout">
        <h2>CHECKOUT</h2>
        <h4>BILLING DETAILS</h4>
        <div className="checkout-content">
          <div className="checkout-info">
            <label>FULL NAME:</label>
            <div>
              <input
                defaultValue={currentUser.name}
                size={100}
                placeholder="Enter Your Full Name Here!"
              ></input>
            </div>
            <label>EMAIL:</label>
            <div>
              <input
                defaultValue={currentUser.email || ""}
                placeholder="Enter Your Email Here!"
              ></input>
            </div>
            <label>PHONE NUMBER:</label>
            <div>
              <input
                defaultValue={currentUser.phone}
                placeholder="Enter Your Phone Number Here!"
              ></input>
            </div>
            <label>ADDRESS:</label>
            <div>
              <input placeholder="Enter Your Address Here!"></input>
            </div>
            <button>Place order</button>
          </div>
          <div className="checkout-order">
            <h4>YOUR ORDER</h4>
            {listItemInCart.map((item) => (
              <div className="checkout-order-row" key={item.id}>
                <div className="checkout-order-row-name">{item.name}</div>
                <div className="checkout-order-opacity">
                  {priceFormat(item.price)} x {item.quantity}
                </div>
              </div>
            ))}
            <div className="checkout-total">
              <div>TOTAL</div>
              <div className="checkout-order-opacity">
                {priceFormat(cartTotal)}
              </div>
            </div>
          </div>
        </div>
      </div>
      <LiveChatIcon />
      <Footer></Footer>
    </div>
  );
};

export default CheckoutPage;

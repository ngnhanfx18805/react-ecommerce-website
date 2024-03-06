import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./CartPage.css";

import Footer from "../components/Layout/Footer";
import NavBar from "../components/Layout/NavBar";
import priceFormat from "../components/hook/PriceFormat";
import { cartActions } from "../store/cartState";
import LiveChatIcon from "../components/Layout/LiveChat/LiveChatIcon";
import BannerPage from "../components/Layout/BannerPage";
const CartPage = () => {
  let listItemInCart = useSelector((state) => state.cart.listItem) || [];

  let cartTotal = 0;
  listItemInCart.forEach((element) => {
    cartTotal += element.quantity * element.price;
  });
  // console.log("tổng tiền: ", cartTotal);
  // console.log(listItemInCart);

  const dispatch = useDispatch();

  const decreaseItemInCart = (id) => {
    //hàm giảm số lượng item trong cart dựa vào id
    dispatch(cartActions.UPDATE_CART({ type: "decrease", id: id }));
  };
  const increaseItemInCart = (id) => {
    //hàm tăng số lượng item trong cart dựa vào id
    dispatch(cartActions.UPDATE_CART({ type: "increase", id: id }));
  };

  const removeItemInCart = (id) => {
    if (
      window.confirm(
        "Are you sure to remove this product from your shopping cart?"
      ) // hỏi lại nếu người dùng đồng y xóa sản phẩm thì tiến hành xóa
    ) {
      console.log("Lấy được:", id);
      dispatch(cartActions.DELETE_CART(id));
    }
  };

  return (
    <div>
      <NavBar></NavBar>
      <BannerPage text="CART" />
      <div className="cart">
        <h4>SHOPPING CART</h4>
        <div className="row gx-0 cart-content">
          <div className="cart-table col-10 row">
            <div className="row cart-list-item">
              <div className="col-2 colheader">IMAGE</div>
              <div className="col-2 colheader">PRODUCT</div>
              <div className="col-2 colheader">PRICE</div>
              <div className="col-2 colheader">QUANTITY</div>
              <div className="col-2 colheader">TOTAL</div>
              <div className="col-2 colheader">REMOVE</div>
            </div>
            {listItemInCart.map((item) => (
              <div key={item.id} className="row cart-list-item">
                <img className="col-2" src={item.img} alt={item.name}></img>
                <div className="col-2 cartItemName cartItemCol">
                  {item.name}
                </div>
                <div className="col-2 cartItemPrice cartItemCol">
                  {priceFormat(item.price)}
                </div>
                <div className="col-2 cartItemQuantity cartItemCol">
                  <button
                    disabled={item.quantity === 1} // Nếu số lượng item bằng 1 thì không cho giảm nữa
                    onClick={() => {
                      decreaseItemInCart(item.id);
                    }}
                  >
                    -
                  </button>
                  {item.quantity}
                  <button
                    onClick={() => {
                      increaseItemInCart(item.id);
                    }}
                  >
                    +
                  </button>
                </div>
                <div className="col-2 cartItemTotal cartItemCol">
                  {priceFormat(item.price * item.quantity)}
                </div>
                <div className="col-2 cartItemCol">
                  <button
                    onClick={() => {
                      console.log("item", item);
                      removeItemInCart(item.id);
                    }}
                    className="removeCartItemBtn"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 19c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5-17v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712zm-3 4v16h-14v-16h-2v18h18v-18h-2z" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
            <div className="col-12 row cart-bot">
              <div className="col-6">
                <Link to="/shoppage">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M0 12l9-8v6h15v4h-15v6z" />
                  </svg>
                  Continue Shoping
                </Link>
              </div>
              <div className="col-6">
                <button className="col-6">
                  <Link to="/cart/checkout">
                    Proceed to checkout
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12l-9-8v6h-15v4h15v6z" />
                    </svg>
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <div className="col-2">
            <h4>CART TOTAL</h4>
            <div className="cartSubTotal">
              SUBTOTAL <span>{priceFormat(cartTotal)}</span>
            </div>
            <div className="cartTotal">
              TOTAL <span>{priceFormat(cartTotal)}</span>
            </div>
            <input
              className="coupon-input"
              size={40}
              placeholder="Enter your coupon"
            ></input>
            <button className="coupon-btn">Apply coupon</button>
          </div>
        </div>
      </div>
      <LiveChatIcon></LiveChatIcon>
      <Footer></Footer>
    </div>
  );
};

export default CartPage;

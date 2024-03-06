import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import DetailPage from "./pages/DetailPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import SignIn from "./components/signin/SignIn";
import SignUp from "./components/signup/SignUp";
function App() {
  return (
    <Routes>
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/detail/:id" element={<DetailPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/cart/checkout" element={<CheckoutPage />} />
      <Route path="/login" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/" element={<HomePage />} />{" "}
    </Routes>
  );
}

export default App;

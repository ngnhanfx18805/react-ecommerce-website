import ListProduct from "../components/Layout/ListProduct";
import NavBar from "../components/Layout/NavBar";
import ShopCategories from "../components/Layout/ShopCategories";
import classes from "./ShopPage.module.css";
import Footer from "../components/Layout/Footer";
import LiveChatIcon from "../components/Layout/LiveChat/LiveChatIcon";
import BannerPage from "../components/Layout/BannerPage";

const ShopPage = () => {
  const m = "<<";
  const n = ">>";
  return (
    <div className={classes.shopPage}>
      <NavBar />
      <div>
        <BannerPage text="SHOP" />
        <div className={classes.shopcontent}>
          <div className={classes.cate}>
            <ShopCategories />
          </div>
          <div className={classes.shoplistitem}>
            <div className={classes.searchshop}>
              <input type="text" />
              <select>
                <option>default sorting</option>
                <option>default sorting</option>
                <option>default sorting</option>
                <option>default sorting</option>
              </select>
            </div>
            <ListProduct />
            <div className={classes.mm}>
              <div className={classes.mmm}>
                <button>{m}</button>
                <p>1</p>
                <button>{n}</button>
              </div>
              <p>showing 1</p>
            </div>
          </div>
        </div>
        <LiveChatIcon />
        <Footer />
      </div>
    </div>
  );
};

export default ShopPage;

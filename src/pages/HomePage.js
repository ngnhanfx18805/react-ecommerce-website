import { useSelector } from "react-redux";

import Banner from "../components/Layout/Banner";
import Footer from "../components/Layout/Footer";
import ListCategory from "../components/Layout/ListCategory";
import ListProduct from "../components/Layout/ListProduct";
import NavBar from "../components/Layout/NavBar";
import OtherInformation from "../components/Layout/OtherInformation";
import Popup from "../components/Layout/Popup";
const HomePage = () => {
  const show = useSelector((state) => state.popup.showPopup);
  const popupData = useSelector((state) => state.popup.data);
  return (
    <div>
      <NavBar />
      <Banner />
      <ListCategory />
      <ListProduct />
      {show === true ? <Popup item={popupData}></Popup> : <></>}

      <OtherInformation />
      <Footer />
    </div>
  );
};

export default HomePage;

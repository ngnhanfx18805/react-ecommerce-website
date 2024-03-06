import { useNavigate } from "react-router-dom";
import classes from "./Banner.module.css";

const Banner = () => {
  const navigate = useNavigate();
  // const imgBanner = "/public/banner1.jpg";
  const onClickBtnHandler = () => {
    navigate("/shop");
  };
  return (
    <section className={classes.banner}>
      <div>
        <p>NEW INSPIRATION 2023</p>
        <p>20% OF ON NEW SEASON</p>
        <button onClick={onClickBtnHandler}>Browse colections</button>
      </div>
    </section>
  );
};

export default Banner;

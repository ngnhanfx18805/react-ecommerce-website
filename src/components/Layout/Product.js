import priceFormat from "../hook/PriceFormat";
import classes from "./Product.module.css";
import { useDispatch } from "react-redux";
import { popupActions } from "../../store/popupRedux";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
const Product = (props) => {
  const [show, setShow] = useState(false);
  const handlerShow = () => {
    setShow(true);
  };

  const price = priceFormat(props.price);

  const dispatch = useDispatch();

  const displayPopup = () => {
    dispatch(popupActions.SHOW_POPUP(props));
  };
  useEffect(() => {
    handlerShow();
  }, []);
  // handler();
  return (
    <div>
      {!window.location.href.includes("/shop") ? (
        <div className={classes.productItem} onClick={displayPopup}>
          <img src={props.img1} alt={props.name} />
          <p>{props.name}</p>
          <p>{price}</p>
        </div>
      ) : (
        <div
          className={classes[`productItem`]}
          style={!show ? { opacity: "0", transform: "scale(0.5)" } : {}}
          onClick={displayPopup}
        >
          <Link
            to={`/detail/` + props?.id?.$oid}
            state={props}
            className={classes.linkdetail}
          >
            <img src={props.img1} alt={props.name} />
            <p className={classes.pfirst}>{props.name}</p>
            <p className={classes.plast}>{price}</p>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Product;

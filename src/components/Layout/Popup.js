import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import "./Popup.css";
import { popupActions } from "../../store/popupRedux";
import priceFormat from "../hook/PriceFormat";
const Popup = (props) => {
  const popupData = props.item;

  const dispatch = useDispatch();
  function ClosePopupHandler() {
    dispatch(popupActions.HIDE_POPUP()); // gọi dispatch để ẩn popup
  }

  return (
    <div>
      <div onClick={ClosePopupHandler} className="popup-background"></div>
      {/* Khi bấm ra ngoài background của popup có thể đóng được popup */}
      <div className="popup">
        <img src={popupData.img1} alt={popupData.name}></img>
        <div className="popup-content">
          <button className="popup-close" onClick={ClosePopupHandler}>
            x
          </button>
          <h2>{popupData.name}</h2>
          <div>{priceFormat(popupData.price)}</div>
          <div>{popupData.short_desc}</div>
          <Link to={"/detail/" + popupData.id} state={popupData}>
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                <path d="M13.5 21c-.276 0-.5-.224-.5-.5s.224-.5.5-.5.5.224.5.5-.224.5-.5.5m0-2c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5m-6 2c-.276 0-.5-.224-.5-.5s.224-.5.5-.5.5.224.5.5-.224.5-.5.5m0-2c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5m16.5-16h-2.964l-3.642 15h-13.321l-4.073-13.003h19.522l.728-2.997h3.75v1zm-22.581 2.997l3.393 11.003h11.794l2.674-11.003h-17.861z" />
              </svg>
              View Detail
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Popup;

import { useNavigate } from "react-router-dom";
import "./ListCategory.css";
const ListCategory = () => {
  const navigate = useNavigate();
  const onClickImageHandler = () => {
    navigate("/shop");
  };
  return (
    <div className="categories">
      <div className="categories-head">
        <div>CAREFULLY CREATED COLLECTIONS</div>
        <h5>BROWSE OUR CATEGORIES</h5>
      </div>
      <div className="container">
        <div className="container1">
          <div className="categori-item">
            <img src="/product_1.png" onClick={onClickImageHandler} alt="aaa" />
          </div>
          <div className="categori-item">
            <img src="/product_2.png" onClick={onClickImageHandler} alt="aaa" />
          </div>
        </div>
        <div className="container1">
          <div className="categori-item">
            <img src="/product_3.png" onClick={onClickImageHandler} alt="aaa" />
          </div>
          <div className="categori-item">
            <img src="/product_4.png" onClick={onClickImageHandler} alt="aaa" />
          </div>
          <div className="categori-item">
            <img src="/product_5.png" onClick={onClickImageHandler} alt="aaa" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListCategory;

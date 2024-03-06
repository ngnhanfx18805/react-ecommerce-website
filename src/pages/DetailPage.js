import React from "react";
import { useLocation, Link } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./DetailPage.css";
import Footer from "../components/Layout/Footer";
import NavBar from "../components/Layout/NavBar";
import priceFormat from "../components/hook/PriceFormat";
import { cartActions } from "../store/cartState";
import GetListItem from "../components/hook/getListItem";
import BannerPage from "../components/Layout/BannerPage";
import { IoMdArrowDropleft } from "@react-icons/all-files/io/IoMdArrowDropleft";
import { IoMdArrowDropright } from "@react-icons/all-files/io/IoMdArrowDropright";

const DetailPage = () => {
  const location = useLocation();
  const product = location.state;
  const [currentImg, setCurrentImg] = useState(product.img1);
  useEffect(() => {
    setCurrentImg(product.img1);
  }, [product.img1]); //
  // console.log(currentImg);
  //   const params = useParams(); // Lấy id sản phẩm (params.id)
  let productDesc =
    product.long_desc.split("• ") || product.long_desc.split("- "); //hàm split để tách chuỗi thành những chuỗi nhỏ hơn dựa trên giá trị điều kiện truyền vào.
  // const newProductDesc = productDesc.slice(1, productDesc.length);
  // console.log(`Mô tả sản phẩm`, newProductDesc);
  // console.log(`danh sach du liệu:`, product);
  const listProduct = GetListItem();
  // console.log(listProduct);
  // console.log(`Đây là danh sách tất cả sản phẩm: `, listProduct);
  const relatedProducts = listProduct.filter(
    (item) => item.category === product.category && item.name !== product.name // lọc danh sách để lấy được những sản phẩm cùng loại nhưng khác tên ( không trùng với sản phẩm đang xem)
  );
  // console.log(`Đây là danh sách liên quan:`, relatedProducts);

  const [quantity, setQuantity] = useState(1);
  const upQuantity = () => {
    setQuantity(quantity + 1);
  };
  const downQuantity = () => {
    setQuantity(quantity - 1);
  };
  // const listItemInCart = useSelector((state) => state.cart.listItem) || [];
  const dispatch = useDispatch();
  const addToCartHandler = () => {
    console.log("sản phẩm và số lượng:", product, quantity);
    const newCartItem = {
      id: product.id || product._id,
      name: product.name,
      price: product.price,
      img: product.img1,
      quantity: quantity,
    };
    // console.log("id san pham:", newCartItem.id);
    dispatch(cartActions.ADD_CART(newCartItem));
  };
  console.log(product);

  return (
    <Fragment>
      <NavBar />
      <BannerPage text="Detail" />
      <div className="Product-detail-content">
        <div className="product-1">
          <div className="col1">
            {product.imgPreview.map((itemMap, key) => (
              <img
                key={key}
                onClick={(data) => setCurrentImg(data.target.currentSrc)}
                src={itemMap}
                alt={itemMap}
              />
            ))}
          </div>
          <div className="col2">
            <img src={currentImg} alt={product.name} />
          </div>
          <div className="col3">
            <h1>{product.name}</h1>
            <h3 style={{ color: "#888", opacity: "0.5" }}>
              {priceFormat(product.price)}
            </h3>
            <p style={{ color: "#666", opacity: "0.5" }}>
              {product.short_desc}
            </p>
            <div>
              <span
                style={{ color: "#444", fontWeight: "bold", fontSize: "large" }}
              >
                Category :
              </span>
              <span style={{ color: "#666", opacity: "0.5" }}>
                {" "}
                {product.category}
              </span>
            </div>
            <div className="product-quantity">
              <div style={{ color: "#666", opacity: "0.5" }}>QUANTITY</div>
              <button disabled={quantity === 0} onClick={downQuantity}>
                <IoMdArrowDropleft></IoMdArrowDropleft>
              </button>
              <div>{quantity}</div>
              <button onClick={upQuantity}>
                <IoMdArrowDropright />
              </button>
              <button onClick={addToCartHandler} className="button-submit">
                Add to cart
              </button>
            </div>
          </div>
        </div>

        <div className="product-long-desc">
          <div>DESCRIPTION</div>
          <div>PRODUCT DESCRIPTION</div>
          <div>
            <p>Đặc điểm nổi bật</p>
            {productDesc.map((item) =>
              item !== `Đặc điểm nổi bật\n` ? (
                <p key={item || Math.random()}>-{item}</p>
              ) : (
                <></>
              )
            )}
          </div>
        </div>
        <div>
          <div>RELATED PRODUCTS</div>
          <div className="Related">
            {relatedProducts.map((item) => (
              <div key={item.name} className="Related-item">
                <Link
                  to={`/detail/` + item._id.$oid}
                  state={{
                    id: item._id.$oid,
                    name: item.name,
                    img1: item.img1,
                    img2: item.img2,
                    img3: item.img3,
                    img4: item.img4,
                    price: item.price,
                    category: item.category,
                    long_desc: item.long_desc,
                    short_desc: item.short_desc,
                  }}
                >
                  <img src={item.img1} alt={item.name} />
                  <div>{item.name}</div>
                  <div>{priceFormat(item.price)}</div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </Fragment>
  );
};

export default DetailPage;

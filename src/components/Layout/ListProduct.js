import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import classes from "./ListProduct.module.css";
import Product from "./Product";

const ListProduct = () => {
  const [product, setProduct] = useState([]);
  const fetchHandler = () => {
    fetch(
      "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74"
    )
      .then((res) => {
        return res.clone().json();
      })
      .then((data) => {
        setProduct([...product, ...data]); //concat array
      });
  };
  useEffect(() => {
    fetchHandler();
  }, []);
  const currentCategory = useSelector((state) => state.category.value);
  return (
    <div className={classes.product}>
      {currentCategory === "all" &&
        product.map((item) => (
          <Product
            key={item._id.$oid || item.name}
            id={item._id}
            name={item.name}
            price={item.price}
            img1={item.img1}
            img2={item.img2}
            img3={item.img3}
            img4={item.img4}
            imgPreview={[item.img1, item.img2, item.img3, item.img4]}
            category={item.category}
            short_desc={item.short_desc}
            long_desc={item.long_desc}
          />
        ))}
      {currentCategory !== "all" &&
        product.map((item) =>
          item.category === currentCategory ? (
            <Product
              key={item._id.$oid || item.name}
              id={item._id}
              name={item.name}
              price={item.price}
              img1={item.img1}
              img2={item.img2}
              img3={item.img3}
              img4={item.img4}
              category={item.category}
              short_desc={item.short_desc}
              long_desc={item.long_desc}
            />
          ) : (
            <></>
          )
        )}
    </div>
  );
};

export default ListProduct;

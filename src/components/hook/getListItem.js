import { useCallback, useEffect, useState } from "react";

const GetListItem = (productList) => {
  const [data, setData] = useState([]);
  const GetData = useCallback(async () => {
    const response = await fetch(
      `https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74`
    );
    const data = await response.json();
    setData(data); // truyền dữ liệu lấy được vào data
    // productList(data);
    return data;
  }, []);
  useEffect(() => {
    GetData();
  }, [GetData]);
  return data;
};

export default GetListItem;

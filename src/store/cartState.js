import { createSlice, current } from "@reduxjs/toolkit";
import getItemFromLocalStorage from "../components/hook/getItemFromLocalStorage";
import setItemToLocalStorage from "../components/hook/setItemToLocalStorage";

const cartListItem = getItemFromLocalStorage("ListItem") || [];

const initialcartState = { listItem: cartListItem || [], value: 0 };
const cartSlice = createSlice(
  {
    name: "cart",
    initialState: initialcartState,
    reducers: {
      ADD_CART(state, action) {
        const updateItemQuantity = () => {
          //Nếu sản phẩm đã có trong giỏ hàng thì chỉ update lại số lượng chứ ko cần thêm mới.
          for (let i = 0; i < state.listItem.length; i++) {
            if (state.listItem[i].id === action.payload.id) {
              state.listItem[i].quantity += action.payload.quantity;
              setItemToLocalStorage("ListItem", state.listItem); // lưu lại vào localStorage
              return true;
            }
          }
          return false;
        };
        if (!updateItemQuantity()) {
          console.log(action.payload);
          // Kiểm tra nếu ko có sản phẩm trong giỏ hàng thì thêm mới
          // console.log("payload", action.payload);
          state.listItem.push(action.payload);
          setItemToLocalStorage("ListItem", state.listItem);
          // console.log(state.listItem);
        }
        // console.log("đây là dữ liệu của cart:", state.listItem);
      },
      UPDATE_CART(state, action) {
        // console.log("Action: ", action);

        if (action.payload.type === "increase") {
          for (let i = 0; i < state.listItem.length; i++) {
            if (state.listItem[i].id === action.payload.id) {
              state.listItem[i].quantity++;
            }
          }
        }
        if (action.payload.type === "decrease") {
          for (let i = 0; i < state.listItem.length; i++) {
            if (state.listItem[i].id === action.payload.id) {
              state.listItem[i].quantity--;
            }
          }
        }
        // console.log("đây là dữ liệu của cart:", state.listItem);
      },
      DELETE_CART(state, action) {
        console.log("state list", current(state.listItem));
        console.log("payload", action.payload);
        const deleteItemInArrByIdValue = (arr, idValue) => {
          //Hàm này dùng tạo mảng mới loại bỏ phần tử có giá trị ID truyền vào (hàm mới = hàm cũ - 1 phần tử có giá trị ID muốn loại bỏ)
          const newArr = arr.filter((item) => item.id.$oid !== idValue.$oid);
          return newArr;
        };
        state.listItem = deleteItemInArrByIdValue(
          state.listItem,
          action.payload
        );
        setItemToLocalStorage("ListItem", state.listItem);
      },
    },
  },
  []
);

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;

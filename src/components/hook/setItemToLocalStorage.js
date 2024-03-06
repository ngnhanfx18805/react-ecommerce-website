const setItemToLocalStorage = (key, data) => {
  window.localStorage.setItem(key, JSON.stringify(data));
};

export default setItemToLocalStorage;

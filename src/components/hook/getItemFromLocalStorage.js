const getItemFromLocalStorage = (key) => {
  const data = window.localStorage.getItem(key);
  return JSON.parse(data);
};

export default getItemFromLocalStorage;

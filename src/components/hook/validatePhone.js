function isVietnamesePhoneNumberValid(number) {
  var vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;

  if (number !== "") {
    if (vnf_regex.test(number) === false) {
      //   alert("Số điện thoại của bạn không đúng định dạng!");
      return false;
    } else {
      //   alert("Số điện thoại của bạn hợp lệ!");
      return true;
    }
  } else {
    // alert("Bạn chưa điền số điện thoại!");
    return false;
  }
}

export default isVietnamesePhoneNumberValid;

function ValidateEmail(email) {
  //   let errors = "";

  if (!email) {
    // errors = "Required";
    return false;
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    // errors = "Invalid email address";
    return false;
  }
  return true;
}

export default ValidateEmail;

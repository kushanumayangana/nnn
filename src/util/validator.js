
export const validateEmail = (email) => {
    if (!email) {
      return "Email cannot be empty.";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return "Please enter a valid email address.";
    }
    return "valid";
};
  

export const validateName = (name) => {
    if (!name) {
      return "Name cannot be empty.";
    }
    const nameRegex = /^[A-Za-z\s]{1,50}$/;
    if (!nameRegex.test(name)) {
      return "Name must contain only letters and spaces, and be no longer than 50 characters.";
    }
    return "valid";
};
  

export const validatePhone = (phone) => {
    if (!phone) {
      return "Phone number cannot be empty.";
    }
    const phoneRegex = /^(?:0|94)?(7[0-9]{8})$/;
    if (!phoneRegex.test(phone)) {
      return "Please enter a valid Sri Lankan phone number";
    }
    return "valid";
};
  

export const validatePassword = (password) => {
    if (!password) {
      return "Password cannot be empty.";
    }
    if (password.length < 8) {
      return "Password must contain at least 8 characters.";
    }
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)/;
    if (!passwordRegex.test(password)) {
      return "Password must contain at least one letter and one number.";
    }
    return "valid";
};
  
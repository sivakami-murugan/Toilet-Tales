// Validate required fields
export const validateRequired = (value) => {
  return value.trim() !== "";
};

// Validate email format
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Validate password length
export const validatePassword = (password) => {
  return password.length >= 8; // Example validation, adjust as needed
};

export const addUserToLocalStorage = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const removeUserFromLocalStorage = (user) => {
  localStorage.removeItem("user");
};

export const getUserFromLocalStorage = () => {
  // pass this into the 'user' initial state
  const result = localStorage.getItem("user");
  const user = result ? JSON.parse(result) : null;
  return user;
};

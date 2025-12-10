// import { useNavigate } from "react-router-dom";

export const registerUser = (userData) => {
  const users = JSON.parse(localStorage.getItem("users")) || [];

  const exits = users.find((u) => u.email === userData.email);

  if (exits) {
    return { success: false, message: "Email Allready Register" };
  }

  users.push(userData);
  localStorage.setItem("users", JSON.stringify(users));
};



export const loginUser = (email, password, remember) => {
  const users = JSON.parse(localStorage.getItem("users")) || [];

  const user = users.find((u) => u.email === email && u.password === password);

  if (!user) {
    return { success: false, message: "Invalid Email or password" };
    // alert("User Are Not exit register user");
  }

  localStorage.setItem("currentUser", JSON.stringify(user));

  if (remember) {
    localStorage.setItem("rememberUser", JSON.stringify(user));
  }
  return { success: true, message: "login Successfully", user };
};

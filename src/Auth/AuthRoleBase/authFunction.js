import { useNavigate } from "react-router-dom";

export const registerUser = (userData) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const exits = users.find(u => u.email === userData.email);

    if(exits){
        return {success:false, message: "Email Allready Register"};
    }

    users.push(userData);
    localStorage.setItem("users", JSON.stringify(users));
   
} 
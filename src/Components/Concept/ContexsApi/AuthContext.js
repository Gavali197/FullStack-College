import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export function AuthProvide({ children }) {
  const [user, setuser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  useEffect(() => {
    if (user) localStorage.setItem("user", JSON.stringify(user));
    else localStorage.removeItem("user");
  }, [user]);

  const login = (email, password) => {
    if (email === "admin123@gmail.com" || password === "1234") {
      setuser({ email, role: "admin" });
      return { success: true };
    } else if (email === "user123@gmail.com" || password === "1234") {
      setuser({ email, role: "user" });
      return { success: true };
    }
    return { success: false, message: "invalide creadition" };
  };

  const logout = () => {
    setuser(null);
  };

  return <AuthContext.Provider>{children}</AuthContext.Provider>;
}

import React, { useEffect, useState } from "react";

function LocalStorage() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return <div>LocalStorage</div>;
}

export default LocalStorage;

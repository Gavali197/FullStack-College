import { useEffect } from "react";

function Hello() {
  useEffect(() => {
    console.log("Component rendered or updated");
  });

  return <h2>Hello React!</h2>;
}

export default Hello
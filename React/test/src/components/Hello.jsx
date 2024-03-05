import { useEffect, useState } from "react";

const Hello = () => {
  useEffect(() => {
    console.log("Hello, world!");
  }, []);
  const [counter, setCounter] = useState(0);

  useState(() => {
    console.log("Hello, world!");
  });
  return (
    <>
      <h1>hello world!</h1>
    </>
  );
};

export default Hello;

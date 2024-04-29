import { useEffect, useState } from "react";

const Home = () => {
  const [email, setEmail] = useState("");
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("auth") || "{}");
    setEmail(data.email);
  }, []);
  return <h1>Welcome {email}</h1>;
};

export default Home;

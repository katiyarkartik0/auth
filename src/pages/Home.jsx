import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Logout from "../component/Logout";

const Home = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("auth") || "{}");
    if (!data.email) {
      navigate("/");
      return;
    }
    setEmail(data.email);
  }, []);
  return (
    <div>
      <h1>Welcome {email}</h1>
      <Logout />
    </div>
  );
};

export default Home;

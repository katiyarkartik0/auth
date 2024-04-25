import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const DEFAULT_DATA = {
  email: "",
  password: "",
  confirmPassword: "",
};
const AuthForm = () => {
  const [isSignup, setIsSignup] = useState(true); // true for signup, false for signin
  const [formData, setFormData] = useState(DEFAULT_DATA);
  const navigate = useNavigate();

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isSignup) {
      const { email, password, confirmPassword } = formData;
      if(password !== confirmPassword){
        alert("Password and Confirm Password do not match")
        return;
      }
      localStorage.setItem("auth", JSON.stringify({ email, password }));
      setIsSignup(false);
      setFormData(DEFAULT_DATA);
    } else if (!isSignup) {
      const { email, password } = JSON.parse(
        localStorage.getItem("auth") || "{}"
      );
      if (formData.email === email) {
        if (formData.password === password) {
          navigate(`/homepage`);
          return
        } else if (formData.password !== password) {
          alert("Please enter a correct password!");
          return
        }
      } else if (formData.email !== email) {
        alert("Looks like you are new here, please sign up first!");
        return
      }
    }
  };

  return (
    <div
      className="auth-form"
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>{isSignup ? "Sign Up" : "Sign In"}</h1>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", width: "400px" }}
      >
        <label htmlFor="email">
          Email:
          <input
            type="text"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            style={{ width: "100%", padding: "10px", margin: "5px" }}
          />
        </label>
        <label htmlFor="password">
          Password:
          <input
            type="password"
            id="password"
            name="password"
            required
            value={formData.password}
            onChange={handleChange}
            style={{ width: "100%", padding: "10px", margin: "5px" }}
          />
        </label>
        {isSignup && (
          <label htmlFor="confirmPassword">
            Confirm Password:
            <input
              type="password"
              required
              id="confirmPassword"
              name="confirmPassword"
              onChange={handleChange}
              value={formData.confirmPassword || ""}
              style={{ width: "100%", padding: "10px", margin: "5px" }}
            />
          </label>
        )}
        <button
          type="submit"
          style={{
            padding: "10px",
            margin: "10px",
            backgroundColor: "#1877F2",
            color: "white",
            width: "100%",
            borderRadius: "50px",
            border: "none",
            cursor: "pointer",
          }}
        >
          {isSignup ? "Sign Up" : "Sign In"}
        </button>
      </form>
      <p style={{ textAlign: "center" }}>
        {isSignup ? "Already have an account?" : "Don't have an account?"}
        <button
          onClick={() => setIsSignup(!isSignup)}
          style={{ border: "none", cursor: "pointer", borderRadius: "50px" }}
        >
          {isSignup ? "Sign In" : "Sign Up"}
        </button>
      </p>
    </div>
  );
};

export default AuthForm;

import "./loginlemon.css";
import { useState } from "react";

const LoginLemon = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "name":
        setName(value);
        break;
      case "surname":
        setSurname(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        break;
    }

    setIsFormValid(
      name !== "" && surname !== "" && email !== "" && number !== ""
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", { name, surname, email, number });
  };

  return (
    <div className="login-lemon-container">
      <h1 className="login-lemon-title">Login to Little Lemon</h1>
      <form className="login-lemon-form" onSubmit={handleSubmit}>
        <div className="login-lemon-form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="login-lemon-form-group">
          <label htmlFor="surname">Surname:</label>
          <input
            type="text"
            id="surname"
            name="surname"
            value={surname}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="login-lemon-form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="login-lemon-form-group">
          <label htmlFor="number">Number:</label>
          <input
            type="tel"
            id="number"
            name="number"
            value={number}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" disabled={!isFormValid}>
          Login
        </button>
      </form>
    </div>
  );
};
export default LoginLemon;

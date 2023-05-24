import React, { useState } from "react";
import "../Styles/EmailInput.css";
const EmailInput = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aquí puedes realizar la llamada a la API con el correo electrónico
    // por ejemplo, usando la función fetch()

    // Resetear el valor del input
    setEmail("");
  };

  return (
    <div className="email-input-container">
      <form onSubmit={handleSubmit}>
        <input
          className="email-input"
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" className="email-input-button">
          Send
        </button>
      </form>
    </div>
  );
};

export default EmailInput;

import React, { useState } from "react";

const PasswordForm = ({ onCheck }) => {
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onCheck(password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Check Strength</button>
    </form>
  );
};

export default PasswordForm;

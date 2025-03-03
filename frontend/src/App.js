import React, { useState } from "react";
import axios from "axios";
import PasswordForm from "./components/PasswordForm";

const App = () => {
  const [strength, setStrength] = useState("");
  const [feedback, setFeedback] = useState("");

  const handlePasswordCheck = async (password) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/check-password",
        {
          password,
        }
      );
      setStrength(response.data.strength);
      // Convert feedback array to a single paragraph
      setFeedback(response.data.feedback.join(" "));
    } catch (error) {
      console.error("Error checking password strength:", error);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Password Strength Checker</h1>
      <PasswordForm onCheck={handlePasswordCheck} />
      {strength && (
        <div style={styles.resultContainer}>
          <h2 style={styles.strength}>Strength: {strength}</h2>
          <p style={styles.feedback}>{feedback}</p>
        </div>
      )}
    </div>
  );
};

export default App;

// CSS styles
const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    maxWidth: "500px",
    margin: "0 auto",
  },
  heading: {
    fontSize: "32px",
    color: "#333",
    marginBottom: "20px",
  },
  resultContainer: {
    marginTop: "20px",
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  strength: {
    fontSize: "24px",
    color: "#007bff",
    marginBottom: "10px",
  },
  feedback: {
    fontSize: "18px",
    color: "#555",
    lineHeight: "1.6",
    textAlign: "left",
    padding: "10px",
    backgroundColor: "#f1f1f1",
    borderRadius: "6px",
  },
};

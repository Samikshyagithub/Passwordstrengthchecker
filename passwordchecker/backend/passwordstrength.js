const checkPasswordStrength = (password) => {
  let score = 0;
  const feedback = [];

  // Length check
  if (password.length >= 12) {
    score += 3;
    feedback.push(" Your password is long enough.");
  } else if (password.length >= 8) {
    score += 2;
    feedback.push("Your password is okay, but longer is better.");
  } else {
    feedback.push(
      "Your password is too short. Aim for at least 12 characters."
    );
  }

  // Complexity check
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumbers = /[0-9]/.test(password);
  const hasSpecialChars = /[^A-Za-z0-9]/.test(password);

  if (hasUppercase && hasLowercase && hasNumbers && hasSpecialChars) {
    score += 3;
    feedback.push(
      "Excellent! Your password includes a mix of character types."
    );
  } else if (hasUppercase && hasLowercase && hasNumbers) {
    score += 2;
    feedback.push("Your password could use some special characters.");
  } else {
    feedback.push(
      "Your password should include uppercase, lowercase, numbers, and special characters."
    );
  }

  // Uniqueness check (basic example)
  const commonPasswords = ["password", "123456", "qwerty", "letmein"];
  if (commonPasswords.includes(password.toLowerCase())) {
    score = 0;
    feedback.push(
      "Your password is too common. Please choose a more unique one."
    );
  } else {
    score += 1;
    feedback.push("Your password is unique. ");
  }

  // Determine strength level
  let strength;
  if (score >= 6) {
    strength = "Strong";
  } else if (score >= 3) {
    strength = "Moderate";
  } else {
    strength = "Weak";
  }

  return { strength, feedback };
};

module.exports = { checkPasswordStrength };

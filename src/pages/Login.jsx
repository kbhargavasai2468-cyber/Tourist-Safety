import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, firebaseConfigIssue } from "../firebase";
import { useNavigate } from "react-router-dom";

function getLoginErrorMessage(err) {
  const code = err?.code || "";

  if (firebaseConfigIssue) return firebaseConfigIssue;
  if (code === "auth/user-not-found") return "No account found with this email.";
  if (code === "auth/wrong-password") return "Incorrect password.";
  if (code === "auth/invalid-email") return "Please enter a valid email.";
  if (code === "auth/invalid-credential") return "Invalid email or password.";

  return err?.message || "Login failed.";
}

export default function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const nav = useNavigate();

  const login = async () => {
    if (firebaseConfigIssue) {
      alert(firebaseConfigIssue);
      return;
    }

    try {
      await signInWithEmailAndPassword(
        auth,
        email.trim(),
        pass
      );

      alert("Login successful");
      nav("/");
    } catch (err) {
      alert(getLoginErrorMessage(err));
    }
  };

  return (
    <div>
      <h2>Login</h2>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
      />

      <button onClick={login}>
        Sign In
      </button>
    </div>
  );
}
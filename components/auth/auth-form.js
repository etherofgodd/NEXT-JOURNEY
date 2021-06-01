import { useState, useRef } from "react";
import { signIn } from "next-auth/client";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import styles from "./auth-form.module.css";

async function createUser(email, password) {
  toast.info("Sending...");
  const response = await fetch("/api/auth/signup", {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    toast.error(data.message || "Sign Up failed");
  } else {
    toast.dark(data.message);
  }
  return data;
}

function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const emailInput = useRef();
  const paswwordInput = useRef();
  const router = useRouter();

  function switchAuthModeHandler() {
    setIsLogin((prevState) => !prevState);
  }

  async function submithandler(e) {
    e.preventDefault();
    const email = emailInput.current.value;
    const password = paswwordInput.current.value;

    if (isLogin) {
      toast.info("Login request Pending");
      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });
      if (result.error) {
        toast.error(result.error);
      } else {
        toast.success("Login successful");
        router.replace("/profile");
      }

      console.log(result);
    } else {
      try {
        const result = await createUser(email, password);
        console.log(result);
      } catch (error) {
        toast(error);
      }
    }
  }

  return (
    <section className={styles.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submithandler}>
        <div className={styles.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailInput} />
        </div>
        <div className={styles.control}>
          <label htmlFor="password">Your Password</label>
          <input type="password" id="password" required ref={paswwordInput} />
        </div>
        <div className={styles.actions}>
          <button>{isLogin ? "Login" : "Create Account"}</button>
          <button
            type="button"
            className={styles.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
}

export default AuthForm;

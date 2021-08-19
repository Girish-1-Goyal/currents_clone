import React, { useState } from "react";
import "./Login.css";
import { auth } from "./firebase";
import { login } from "../features/userSlice";
import { useDispatch } from "react-redux";

function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const logintoapp = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password)
    .then((userAuth) => {
      dispatch(
        login({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: name,
        })
      );
    })
    .catch((error) => alert(error));
  };

  const register = () => {
    if (!name) {
      return alert("Please enter a full name");
    }
    auth.createUserWithEmailAndPassword(email, password).then((userAuth) => {
      userAuth.user
        .updateProfile({
          displayName: name,
        })
        .then(() => {
          dispatch(
            login({
              email: userAuth.user.email,
              uid: userAuth.user.uid,
              displayName: name,
            })
          );
        });
    })
    .catch((error) => alert(error)); 
  };

  return (
    <div className="login_page">
      <div className="login_win">
        <div className="upper_login">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1920px-Google_2015_logo.svg.png" />
          <h3>Sign in</h3>
          <p>Use your Google Account</p>
        </div>
        <div className="middle_login">
          <form>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="name"
              placeholder=" Full name"
              default=""
              required
            />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              defaultValue=" "
              placeholder=" Email"
            />
            <p>Forgot email?</p>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder=" Password"
            />
            <p>Forgot password?</p>
            <h4>Not your computer?Use Guest mode to sign in privately</h4>
            <h5>Learn more</h5>
            <div className="buttons">
              <span onClick={register}>Create account</span>
              <button type="submit" onClick={logintoapp}>
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="out_bottom">
        <p>English(United Kingdom)</p>
        <div className="right_side">
          <p>Help</p>
          <p>Privacy</p>
          <p>Terms</p>
        </div>
      </div>
    </div>
  );
}

export default Login;

import { useState } from "react";
import Button from "../common/Button";
import { Link } from "react-router-dom";
import TextInput from "../common/Inputs";
import "./logIn.scss";

export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("submit");
  };

  return (
    <div className="login">
      <form onSubmit={submitHandler} className="hero">
        <h2>تسجيل الدخول</h2>
        <div className="card">
          <TextInput
            label="البريد الالكتروني"
            type="email"
            name="email"
            value={email}
            placeholder="أكتب بريدك الالكتروني"
            onChange={(e) => setEmail(e.target.value)}
            required={true}
          />
          <TextInput
            label="الرمز السري"
            type="password"
            name="password"
            value={password}
            placeholder="أكتب الرمز السري"
            onChange={(e) => setPassword(e.target.value)}
            required={true}
          />
          <Button type="submit" className="Button--medium Button--success">
            تسجيل الدخول
          </Button>
        </div>
        <Link to="/signUp" className="small no-account">
          ليس لديك حساب؟
        </Link>
      </form>
    </div>
  );
}

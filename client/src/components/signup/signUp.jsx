import { useState } from "react";
import Button from "../common/Button";
import TextInput, { RadioInput } from "../common/Inputs";
import "./signUp.scss";

export default function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [phone, setPhone] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("submit");
  };

  return (
    <div className="signUp">
      <form onSubmit={submitHandler} className="hero">
        <h2>تسجيل حساب</h2>
        <div className="container">
          <div className="card">
            <h6>الاسم</h6>
            <TextInput
              label="الاسم الأول"
              type="text"
              name="firstName"
              value={firstName}
              placeholder="أكتب أسمك الاول"
              onChange={(e) => setFirstName(e.target.value)}
              required={true}
            />
            <TextInput
              label="الاسم المتوسط"
              type="text"
              name="middleName"
              value={middleName}
              placeholder="أكتب أسمك المتوسط"
              onChange={(e) => setMiddleName(e.target.value)}
              required={true}
            />
            <TextInput
              label="الاسم الأخير"
              type="text"
              name="lastName"
              value={lastName}
              placeholder="أكتب أسمك الأخير"
              onChange={(e) => setLastName(e.target.value)}
              required={true}
            />
          </div>
          <div className="card">
            <h6>معلومات الحساب</h6>
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
            <TextInput
              label="أعد إدخال الرمز السري"
              type="password"
              name="rePassword"
              value={rePassword}
              placeholder="أعد إدخال الرمز السري"
              onChange={(e) => setRePassword(e.target.value)}
              required={true}
            />
          </div>
          <div className="card">
            <h6>معلومات أخرى</h6>
            <TextInput
              label="رقم الهاتف"
              type="text"
              name="phone"
              value={phone}
              placeholder="أكتب رقم هاتفك"
              onChange={(e) => setPhone(e.target.value)}
              required={true}
            />
            <RadioInput
              label="النوع"
              name="gender"
              valuesArr={["ذكر", "أنثى"]}
              onChange={(e) => setGender(e.target.value)}
              required={true}
            />
          </div>
          <Button type="submit" className="Button--success Button-medium">
            تسجيل
          </Button>
        </div>
      </form>
    </div>
  );
}

import { useState } from "react";
import Button from "../common/Button";
import TextInput, { RadioInput } from "../common/Inputs";
import "./signUp.scss";

export default function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [gender, setGender] = useState("");

  return (
    <div className="signUp">
      <div className="hero">
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
            />
            <RadioInput
              label="النوع"
              name="gender"
              required={true}
              valuesArr={["أنثى", "ذكر"]}
              onChange={(e) => setGender(e.target.value) } 
            />
            <label className="input-field">
              الاسم الأول
              <input type="text" />
            </label>
            <label className="input-field">
              الاسم المتوسط
              <input type="text" />
            </label>
            <label className="input-field">
              الاسم الأخير
              <input type="text" />
            </label>
          </div>
          <div className="card">
            <h6>معلومات الحساب</h6>
            <label className="input-field">
              الحساب
              <input type="text" />
            </label>
            <label className="input-field">
              الرمز السري
              <input type="text" />
            </label>
            <label className="input-field">
              أعد إدخال الرمز السري
              <input type="text" />
            </label>
          </div>
          <div className="card">
            <h6>معلومات أخرى</h6>
            <label className="input-field">
              رقم الهاتف
              <input type="text" />
            </label>
            <label className="radio-field">
              النوع
              <div className="radio-buttons">
                <small>
                  أنثى
                  <input type="radio" name="gender" />
                </small>
                <small>
                  ذكر
                  <input type="radio" name="gender" />
                </small>
              </div>
            </label>
          </div>
          <Button className="Button--success Button-medium">تسجيل</Button>
        </div>
      </div>
    </div>
  );
}

import "./signUp.scss";
import Footer from "../common/Footer";

export default function SignUp() {
  return (
    <div className="signUp">
      <div className="hero">
        <h2>تسجيل حساب</h2>
        <div className="container">
          <div className="card">
            <h6>الاسم</h6>
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
          <button>تسجيل</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

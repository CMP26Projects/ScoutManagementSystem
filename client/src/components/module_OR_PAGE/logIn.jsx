import '../../assets/styles/components/logIn.css'

export default function LogIn() {
    return (
        <div className="hero">
            <h2>تسجيل الدخول</h2>
            <div className="card">
                <label className="input-field">
                    الحساب
                    <input type="email" />
                </label>
                <label className="input-field">
                    الرمز السري
                    <input type="password" />
                </label>
                <button>تسجيل الدخول</button>
            </div>
            <small className="no-account">ليس لديك حساب؟</small>
        </div>
    )
}

import './logIn.scss'
import Footer from '../common/Footer'

export default function LogIn() {
    return (
        <>
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
                <div className="small no-account">ليس لديك حساب؟</div>
            </div>
            <Footer />
        </>
    )
}

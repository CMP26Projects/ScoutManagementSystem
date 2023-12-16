import Nav from "../common/nav";
import Button from "../common/Button";
import Footer from "../common/Footer";

export default function LandingPage() {
  return (
    <>
      <Nav showIcons={true} />
      <Button className="Button--primary" linkTo="/login">
        تسجيل الدخول
      </Button>
      <Button className="Button--dark" linkTo="/signUp">
        إنشاء حساب
      </Button>
      <Footer />
    </>
  );
}

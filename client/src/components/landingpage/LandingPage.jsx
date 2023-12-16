import Nav from "../common/nav";
import Button from "../common/Button";
import Footer from "../common/Footer";

import FancyBlobs from "./FancyBlobs";

export default function LandingPage() {
  return (
    <>
      <Nav showIcons={true} />
      <FancyBlobs />
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

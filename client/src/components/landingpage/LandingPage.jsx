import Nav from "../common/nav";
import Button from "../common/Button";
import Footer from "../common/Footer";

import FancyBlobs from "./FancyBlobs";

import {
  FolderIcon,
  AcademicCapIcon,
  PresentationChartLineIcon,
  PencilSquareIcon,
  BanknotesIcon,
  FlagIcon,
  BellAlertIcon,
} from "@heroicons/react/24/solid";

const features = [
  {
    icon: <FolderIcon />,
    text: "إدارة الغياب والاشتراك الاسبوعي",
  },
  {
    icon: <AcademicCapIcon />,
    text: "تقييم الأفراد ووضع النتائج",
  },
  {
    icon: <PresentationChartLineIcon />,
    text: "وضع الاحصاءيات والتقارير",
  },
  {
    icon: <PencilSquareIcon />,
    text: "تسجيل المواضيع والانشطة المتنوعة",
  },
  {
    icon: <BanknotesIcon />,
    text: "إدارة الماليات والخزنة",
  },
  {
    icon: <FlagIcon />,
    text: "إنشاء التقارير وتسجيل مجالس الشرف",
  },
  {
    icon: <BellAlertIcon />,
    text: "إرسال التنبيهات والاشعارات للقادة",
  },
];

export default function LandingPage() {
  return (
    <>
      <Nav showIcons={false} />
      <header className="hero">
        <div className="container">
          <h1>نظام إدارة الكشافة الحديث</h1>
          <p>
            نقدم حلول لكل مشاكل اداريات المجموعات من تسجيل الغياب الاشتراكات
            المواضيع التقييم وغيرهم من الامور.
          </p>
          <Button className="Button--primary" linkTo="/login">
            تسجيل الدخول
          </Button>
          <Button className="Button--dark" linkTo="/signUp">
            إنشاء حساب
          </Button>
        </div>
      </header>
      <section className="features">
        <h2 className="features__title">مميزات</h2>
        {features.map((feature, index) => (
          <div className="feature" key={index}>
            <div className="icon">{feature.icon}</div>
            <p>{feature.text}</p>
          </div>
        ))}

        <FancyBlobs />
        <Footer />
      </section>
    </>
  );
}

import PageTitle from "../common/PageTitle";
import "./Dashboard.scss";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const { userInfo } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userInfo) {
      navigate("/logIn");
    }
  }, [navigate, userInfo]);

  const titleMsg = `مرحباً يا كاتبن ${userInfo?.firstName} ${userInfo?.middleName}`;

  return (
    <div className="dashboard">
      <PageTitle title={titleMsg} />
    </div>
  );
}

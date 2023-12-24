import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useLogoutMutation } from "../../redux/slices/usersApiSlice";
import { clearCredentials } from "../../redux/slices/authSlice";
import { useDispatch } from "react-redux";

// icons
import { UserCircleIcon } from "@heroicons/react/24/outline";
import {
  BellIcon,
  ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/outline";
// logo
import logo from "../../assets/images/logo.svg";
// styles
import "../../assets/styles/components/Nav.scss";

export default function Nav() {
  const [show, setShow] = useState(false);

  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logout, { isLoading, error }] = useLogoutMutation();

  useEffect(() => {
    if (userInfo) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [userInfo]);

  const handleLogout = async () => {
    try {
      const res = await logout().unwrap();
      toast.dark("تم تسجيل الخروج بنجاح");
      dispatch(clearCredentials());
      navigate("/");
    } catch (err) {
      toast.dark("حدث خطأ ما");
      toast.error(err?.data?.message || err.error || JSON.stringify(err));
      console.error(err);
    }
  };

  return (
    <nav className="Nav">
      <div className="container">
        <div className="Nav__logo">
          <Link to="/">
            <img src={logo} alt="logo" />
            <h2 className="logo-text">كشافة</h2>
          </Link>
        </div>
        {show && (
          <div className="Nav__icons">
            <Link onClick={handleLogout}>
              <ArrowLeftOnRectangleIcon className="Nav__icon" />
            </Link>
            <Link to="/profile">
              <UserCircleIcon className="Nav__icon" />
            </Link>
            {/* TODO: add route later */}
            <Link to="/">
              <BellIcon className="Nav__icon" />
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

Nav.propTypes = {
  showIcons: PropTypes.bool,
};

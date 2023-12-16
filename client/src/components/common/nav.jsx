import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// icons
import { UserCircleIcon } from "@heroicons/react/24/outline";
import { BellIcon } from "@heroicons/react/24/outline";
// logo
import logo from "../../assets/images/logo.svg";
// styles
import "../../assets/styles/components/Nav.scss";

export default function Nav(props) {
  const { showIcons } = props;

  return (
    <nav className="Nav">
      <div className="container">
        <div className="Nav__logo">
          <Link to="/">
            <img src={logo} alt="logo" />
            <h2 className="logo-text">كشافة</h2>
          </Link>
        </div>
        {showIcons && (
          <div className="Nav__icons">
            {/* TODO: add route later */}
            <Link to="/">
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
  showIcons: PropTypes.bool.isRequired,
};

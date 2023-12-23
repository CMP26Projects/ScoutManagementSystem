import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

// Styles
import "../../assets/styles/components/Button.scss";

export default function Button(props) {
  const { children, className, linkTo, ...rest } = props;

  return (
    <>
      {linkTo ? (
        <Link to={linkTo} className={`Button ${className}`} {...rest}>
          {children}
        </Link>
      ) : (
        <button className={`Button ${className}`} {...rest}>
          {children}
        </button>
      )}
    </>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  linkTo: PropTypes.string,
};

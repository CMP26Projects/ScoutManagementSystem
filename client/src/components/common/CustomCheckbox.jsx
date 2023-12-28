import PropTypes from "prop-types";

export default function CustomCheckbox(props) {
  const { labels, values, checkedValues, onChange, name, required, className } =
    props;
  return (
    <div className={"input input--checkbox" + " " + className}>
      {labels.map((label, index) => (
        <label key={index}>
          <input
            type="checkbox"
            name={name}
            value={values[index]}
            onChange={onChange}
            required={required}
            checked={checkedValues.includes(values[index])}
            style={{
              marginBlock: "0.5rem",
              marginInline: "0.5rem",
            }}
          />
          <span
            style={{
              userSelect: "none",
            }}
          >
            {label}
          </span>
        </label>
      ))}
    </div>
  );
}

CustomCheckbox.propTypes = {
  labels: PropTypes.array.isRequired,
  values: PropTypes.array.isRequired,
  checkedValues: PropTypes.array,
  onChange: PropTypes.func,
  name: PropTypes.string,
  required: PropTypes.bool,
  className: PropTypes.string,
};

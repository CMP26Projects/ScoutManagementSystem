import PropTypes from "prop-types";

//----------------------------------------------------------------
// Usage:
{/* <CustomSelect
  name={"select"}
  label={"اختر اللغة"}
  data={[
    { id: 1, name: "العربية" },
    { id: 2, name: "English" },
  ]}
  displayMember={"name"}
  valueMember={"id"}
  selectedValue={selectedLanguage}
  required={true}
  onChange={(e) => setSelectedLanguage(e.target.value)} */}
// />
//----------------------------------------------------------------

export default function CustomSelect(props) {
  const {
    data,
    displayMember,
    valueMember,
    defaultValue,
    selectedValue,
    onChange,
    name,
    label,
    required,
  } = props;

  return (
    <label className="input input--select">
      <span>{label}</span>
      <select
        name={name}
        onChange={onChange}
        defaultValue={defaultValue}
        required={required}
        value={selectedValue}
      >
        {data.map((item) => (
          <option key={item[valueMember]} value={item[valueMember]}>
            {item[displayMember]}
          </option>
        ))}
      </select>
    </label>
  );
}

CustomSelect.propTypes = {
  data: PropTypes.array.isRequired,
  displayMember: PropTypes.string.isRequired,
  valueMember: PropTypes.string.isRequired,
  defaultValue: PropTypes.string,
  selectedValue: PropTypes.any,
  onChange: PropTypes.func,
  name: PropTypes.string,
  label: PropTypes.string,
  required: PropTypes.bool,
};

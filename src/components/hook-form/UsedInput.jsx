import { PropTypes } from "prop-types";
const UsedInput = ({ lable, type, ...others }) => {
  return (
    <div className="text-sm w-full">
      <label className="text-black text-sm">{lable}</label>
      <input
        {...others}
        type={type}
        className="w-full bg-transparent text-sm mt-3 p-4 border border-border font-light rounded-lg focus:border focus:border-subMain outline-none"
      />
    </div>
  );
};
UsedInput.propTypes = {
  lable: PropTypes.string,
  type: PropTypes.string,
};
export default UsedInput;

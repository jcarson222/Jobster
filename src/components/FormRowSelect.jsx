import React from "react";

const FormRowSelect = ({ labelText, name, value, handleChange, list }) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <select
        name={name}
        id={name}
        value={value}
        onChange={handleChange}
        className="form-select"
      >
        {list.map((listType, index) => {
          return (
            <option key={index} value={listType}>
              {listType}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default FormRowSelect;

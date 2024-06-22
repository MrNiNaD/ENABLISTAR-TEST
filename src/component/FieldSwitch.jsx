import React from "react";
import { fieldTypes } from "../util";

const FieldSwitch = ({ register, eachField }) => {
  if (eachField?.type === fieldTypes.select) {
    return (
      <select
        id={eachField?.name}
        {...register(eachField?.name, { required: true })}
      >
        {Array.isArray(eachField?.options) &&
          eachField?.options?.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
      </select>
    );
  }

  if (eachField?.type === fieldTypes.textarea) {
    return (
      <textarea
        id={eachField?.name}
        {...register(eachField?.name, { required: true })}
      ></textarea>
    );
  }

  if (
    [fieldTypes.numberfield, fieldTypes.inputfield].includes(eachField?.type)
  ) {
    return (
      <input
        type={eachField?.type === fieldTypes.numberfield ? "number" : "text"}
        {...register(eachField?.name, { required: true })}
        id={eachField?.name}
      />
    );
  }

  return null;
};

export default FieldSwitch;

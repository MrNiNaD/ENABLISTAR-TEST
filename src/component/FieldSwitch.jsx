import React from "react";
import { fieldTypes } from "../util";
import { useIsView } from "../useIsView";

const FieldSwitch = ({ register, eachField }) => {
  const isView = useIsView();

  if (eachField?.type === fieldTypes.select) {
    return (
      <select
        id={eachField?.name}
        {...register(eachField?.name, { required: true })}
        disabled={isView}
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
        readOnly={isView}
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
        readOnly={isView}
      />
    );
  }

  return null;
};

export default FieldSwitch;

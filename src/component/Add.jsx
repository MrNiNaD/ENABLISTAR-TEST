import React from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { fieldTypes, uid } from "../util";
import FieldSwitch from "./FieldSwitch";

const Add = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const param = useParams();

  const field = [
    {
      id: 1,
      type: fieldTypes.inputfield,
      name: "name",
      label: "Beneficiary Name",
    },
    {
      id: 3,
      type: fieldTypes.inputfield,
      name: "bank",
      label: "Beneficiary Bank",
    },
    {
      id: 4,
      type: fieldTypes.numberfield,
      name: "accno",
      label: "Account Number",
    },
    {
      id: 5,
      type: fieldTypes.select,
      name: "typeofacc",
      label: "Type of Account",
      options: ["Saving Account", "Current Account"],
    },
    {
      id: 6,
      type: fieldTypes.textarea,
      name: "address",
      label: "Address",
    },
    {
      id: 7,
      type: fieldTypes.select,
      name: "country",
      label: "Country",
      options: ["India", "England", "USA", "Australia", "Russia"],
    },
    {
      id: 8,
      type: fieldTypes.numberfield,
      name: "pincode",
      label: "Pincode",
    },
    { id: 2, type: fieldTypes.button, text: "Submit" },
  ];

  return (
    <section className="manage wrapper add-beneficiary">
      <div className="manage-part-1">
        <h2>Add New Beneficiaries</h2>
      </div>

      <form
        onSubmit={handleSubmit((data) => {
          if (confirm("Are you sure you want add new beneficiary?") === true) {
            console.log(data);
            console.log(uid());
          }
        })}
        className="form-container"
      >
        {field.map((eachField) => {
          if (eachField?.type === fieldTypes.button) {
            return (
              <div key={eachField?.id} className="btn-container">
                <button className="button">{eachField?.text}</button>
              </div>
            );
          }

          return (
            <div key={eachField?.id} className="input-field each-field-div">
              <label htmlFor={eachField?.name}>
                {eachField?.label}
                <span className="required">*</span>
              </label>
              <FieldSwitch register={register} eachField={eachField} />
              {errors?.[eachField?.name] && (
                <p className="error-msg">Fill this field</p>
              )}
            </div>
          );
        })}
      </form>
    </section>
  );
};

export default Add;

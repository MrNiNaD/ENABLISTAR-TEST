import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { field, fieldTypes, uid } from "../util";
import FieldSwitch from "./FieldSwitch";
import { useDispatch, useSelector } from "react-redux";
import { addNewUser, editUser } from "../redux/slice/user";

const Add = () => {
  const user = useSelector((state) => state?.user?.data);
  const param = useParams();

  const foundData = user.find((eachUser) => eachUser?.id === param?.id);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const afterSubmit = (data) => {
    if (confirm("Are you sure you want add new beneficiary?") === true) {
      if (foundData) {
        dispatch(editUser(data));
      } else {
        dispatch(addNewUser({ ...data, id: uid() }));
      }

      navigate("/");
    }
  };

  useEffect(() => {
    if (foundData) {
      reset(foundData);
    }
  }, []);

  return (
    <section className="manage wrapper add-beneficiary">
      <div className="manage-part-1">
        <h2>Add New Beneficiaries</h2>
      </div>

      <form onSubmit={handleSubmit(afterSubmit)} className="form-container">
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

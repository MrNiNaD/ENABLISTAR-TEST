import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCommonState } from "../redux/slice/common";

const Poppup = () => {
  const defaultConfig = {
    display: false,
  };

  const modalConfig = useSelector((state) => state?.common?.modalConfig) ?? {};
  const dispatch = useDispatch();

  const finalConfig = {
    ...defaultConfig,
    ...modalConfig,
  };

  const stopPropogate = (e) => e.stopPropagation();
  const closeModal = () => {
    dispatch(updateCommonState({ modalConfig: defaultConfig }));
  };

  const onConfirm = () => {
    finalConfig?.callback();
    closeModal();
  };

  if (!finalConfig?.display) {
    return null;
  }

  return (
    <>
      <div
        onClick={(e) => {
          stopPropogate(e);
          closeModal();
        }}
        className="overlay"
      ></div>
      <div onClick={stopPropogate} className="modal">
        <p className="modal-msg">{finalConfig?.msg ?? ""}</p>

        <div className="modal-btn">
          {typeof finalConfig?.callback === "function" ? (
            <>
              <button onClick={onConfirm} className="button">
                Ok
              </button>
              <button onClick={closeModal} className="button">
                Cancel
              </button>
            </>
          ) : (
            <button onClick={closeModal} className="button">
              Ok
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Poppup;

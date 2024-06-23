import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser } from "../redux/slice/user";
import { updateCommonState } from "../redux/slice/common";

const Manage = () => {
  const [selectedId, setSelectedId] = useState([]);
  const user = useSelector((state) => state?.user?.data);

  const dispatch = useDispatch();

  const isUser = Array.isArray(user) && user.length > 0;

  const selectId = (id) => {
    setSelectedId((prevstate) => {
      if (prevstate.includes(id)) {
        return prevstate.filter((eachValue) => eachValue !== id);
      } else {
        return [...prevstate, id];
      }
    });
  };

  const onDelete = () => {
    if (selectedId?.length > 0) {
      dispatch(
        updateCommonState({
          modalConfig: {
            display: true,
            msg: "Are you sure that you want to delete this beneficiary?",
            callback: () => {
              dispatch(deleteUser(selectedId));
            },
          },
        })
      );
    } else {
      dispatch(
        updateCommonState({
          modalConfig: {
            display: true,
            msg: "Select the beneficiary to delete.",
          },
        })
      );
    }
  };

  return (
    <section className="manage wrapper">
      <div className="manage-part-1">
        <h2 className="manage-title">Manage Beneficiaries</h2>

        <Link to="/add" className="button">
          Add New Beneficiaries
        </Link>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Full Name</th>
              <th>Address</th>
              <th>Country</th>
              <th>Pincode</th>
              <th className="links-head"></th>
            </tr>
          </thead>
          {isUser && (
            <tbody>
              {user.map((eachUser) => {
                const id = eachUser?.id;

                return (
                  <tr key={id}>
                    <td>
                      <input
                        type="checkbox"
                        onChange={() => selectId(id)}
                        checked={selectedId.includes(id)}
                      />
                    </td>
                    <td>
                      <span className="ellipsis">{eachUser?.name}</span>
                    </td>
                    <td>
                      <span className="ellipsis">{eachUser?.address}</span>
                    </td>
                    <td>
                      <span className="ellipsis">{eachUser?.country}</span>
                    </td>
                    <td>
                      <span className="ellipsis">{eachUser?.pincode}</span>
                    </td>
                    <td>
                      <span className="link-container">
                        <Link to={`view/${id}`} className="button">
                          View
                        </Link>
                        <Link to={`edit/${id}`} className="button">
                          Edit
                        </Link>
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          )}
        </table>
        {!isUser && (
          <div className="no-data-div">
            You didn't add any beneficiaries. Click "Add Beneficiary" to include
            one.
          </div>
        )}
      </div>

      <div className="delete-container">
        <button onClick={onDelete} className="button danger">
          Delete
        </button>
      </div>
    </section>
  );
};

export default Manage;

import React from "react";
import { useSelector } from "react-redux";

const Manage = () => {
  const user = useSelector((state) => state?.user?.data);

  const isUser = Array.isArray(user) && user.length > 0;

  return (
    <section className="manage wrapper">
      <div className="manage-part-1">
        <h2>Manage Beneficiaries</h2>

        <button className="button">Add New Beneficiaries</button>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Address</th>
              <th>Country</th>
              <th>Pincode</th>
              <th></th>
            </tr>
          </thead>
          {isUser && (
            <tbody>
              <tr>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>Germany</td>
                <td>400025</td>
                <td></td>
              </tr>
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
    </section>
  );
};

export default Manage;

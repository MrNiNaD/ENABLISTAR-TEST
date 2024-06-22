import React from "react";
import HdfcLogo from "../assets/hdfc_logo.gif";

const TopBar = () => {
  const data = [
    "Smart Buy",
    "Personalize User ID",
    "Insta Alert",
    "SMS Banking Registation",
    "Contact Us",
  ];
  const navLinks = [
    "Accounts",
    "Funds Transfer",
    "BillPay & Recharge",
    "Cards",
    "Demat",
    "Mutual Funds",
    "Insurance",
    "Loans",
    "Offer",
  ];

  return (
    <header>
      <div className="section-1">
        <ul className="wrapper">
          {data.map((eachData, index) => (
            <li key={index}>{eachData}</li>
          ))}
        </ul>
      </div>

      <div className="section-2">
        <div className="wrapper">
          <h1>
            <span className="net-banking">
              <span className="net">Net</span>
              <span className="banking">Banking</span>
            </span>
            <img src={HdfcLogo} />
          </h1>

          <div className="right-section">
            <div className="right-section-part-1">
              <div className="left">
                <span className="welcome-text">WELCOME, NINAD</span>
                <span className="login-time">
                  Last Login: Jul 09 2020 3:39 PM IST
                </span>
              </div>
              <div className="right">
                <ul>
                  <li>Change Password</li>
                  <li>Update Contact Details</li>
                  <li>
                    <button>Logout</button>
                  </li>
                </ul>
              </div>
            </div>

            <div className="right-section-part-2">
              <ul>
                {navLinks?.map((navLink, index) => {
                  return (
                    <li
                      className={
                        navLink === "Funds Transfer" ? "nav-link-active" : ""
                      }
                      key={index}
                    >
                      {navLink}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopBar;

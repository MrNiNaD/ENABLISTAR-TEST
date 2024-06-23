export const uid = function(){
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

export const fieldTypes = {
  inputfield: "inputField",
  textarea: "textarea",
  select: "select",
  numberfield: "numberfield",
  button: "button",
};

export const field = [
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
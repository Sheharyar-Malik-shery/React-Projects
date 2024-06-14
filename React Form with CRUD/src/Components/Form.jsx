import React from "react";

function Form({
  initiladata,
  handlechange,
  handlesubmit,
  updatebtn,
  handelupdatabtn,
}) {
  console.log(updatebtn);
  return (
    <form>
      <input
        type="text"
        placeholder="Enetr your First Name"
        value={initiladata.FirstName}
        name="FirstName"
        onChange={handlechange}
      />
      <input
        type="text"
        placeholder="Enetr Your Last Name"
        name="LastName"
        value={initiladata.LastName}
        onChange={handlechange}
      />
      {updatebtn ? (
        <button
          onClick={handlesubmit}
          type="button"
          class="btn btn-primary"
          style={{
            background: "#67B7EF",
            minWidth: "80px" /* Adjust this value as needed */,
            padding: "8px",
          }}
        >
          Submit
        </button>
      ) : (
        <button
          onClick={handelupdatabtn}
          type="button"
          class="btn btn-primary"
          style={{
            background: "#67B7EF",
            minWidth: "80px" /* Adjust this value as needed */,
            padding: "8px",
          }}
        >
          Update
        </button>
      )}
    </form>
  );
}

export default Form;

import { useState } from "react";
import "./App.css";
import Form from "./Components/Form";
import DisplayData from "./Components/DisplayData";

function App() {
  const [formData, setFormData] = useState({ FirstName: "", LastName: "" });
  const [submittedData, setSubmittedData] = useState([]);
  const [updatebtn, setUpdateBtn] = useState(true);
  const [itemindex, setItemIndex] = useState(null);
  // console.log(formData);
  function handlechange(e) {
    let { name, value, placeholder } = e.target;
    // console.log(name, value, placeholder);
    setFormData({
      ...formData,
      [name]: value,
    });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData([...submittedData, formData]);
    setFormData({ FirstName: "", LastName: "" });
  };

  const handleDelete = (index) => {
    const newData = submittedData.filter((_, i) => i !== index);
    setSubmittedData(newData);
  };

  const handleedit = (index, item) => {
    setFormData(item);
    setItemIndex(index);
    setUpdateBtn(false);
  };

  const handelupdatabtn = (e) => {
    console.log("data not geting");
    e.preventDefault();
    const updatedData = submittedData.map((item, index) =>
      index === itemindex ? formData : item
    );
    setSubmittedData(updatedData);
    setFormData({ FirstName: "", LastName: "" });
    setIsUpdate(true);
    setItemIndex(null);
  };

  return (
    <>
      <h1>CRUD Form</h1>
      <Form
        initiladata={formData}
        handlechange={handlechange}
        handlesubmit={handleSubmit}
        updatebtn={updatebtn}
        handelupdatabtn={handelupdatabtn}
      />
      <DisplayData
        data={submittedData}
        handleDelete={handleDelete}
        updatedata={handleedit}
      />
    </>
  );
}

export default App;

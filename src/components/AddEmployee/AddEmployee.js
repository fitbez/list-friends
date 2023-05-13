import { useState, useContext } from "react";
import "./AddEmployee.css";
import { EmployeeContext } from "../../EmployeeAppContext";

const AddEmployee = () => {
  const { setEmployeeInfo, employeeInfo } = useContext(EmployeeContext);
  const [inputValues, setInputValues] = useState({
    fullName: "",
    title: "",
    email: "",
    sms: "",
    callOffice: "",
    callMobile: "",
    image: "",
  });

  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  const SuccessAlert = () => {
    return (
      <div
        style={{
          backgroundColor: "lightgreen",
          border: "1px solid lightgreen",
          height: "160px",
        }}
      >
        <h2>Succes</h2>
        <p>You have successfuly submited an employee information!</p>
      </div>
    );
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setEmployeeInfo([...employeeInfo, inputValues]);
    setShowSuccessAlert(true);
  };

  console.log("succes", showSuccessAlert);

  return (
    <>
      <h1>Add Employee</h1>
      {showSuccessAlert && <SuccessAlert />}
      <form className='add-employee-form' onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='full name'
          value={inputValues.fullName}
          name='fullName'
          onChange={handleChange}
        />
        <input
          type='text'
          placeholder='title'
          value={inputValues.title}
          name='title'
          onChange={handleChange}
        />
        <input
          type='text'
          placeholder='email'
          value={inputValues.email}
          name='email'
          onChange={handleChange}
        />
        <input
          type='text'
          placeholder='call mobile'
          value={inputValues.callMobile}
          name='callMobile'
          onChange={handleChange}
        />
        <input
          type='text'
          placeholder='sms'
          value={inputValues.sms}
          name='sms'
          onChange={handleChange}
        />
        <input
          type='text'
          placeholder='image'
          value={inputValues.image}
          name='image'
          onChange={handleChange}
        />
        <input
          type='text'
          placeholder='call office'
          value={inputValues.callOffice}
          name='callOffice'
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </>
  );
};

export default AddEmployee;

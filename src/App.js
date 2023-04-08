import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import EmployeePage from "./components/EmployeePage/EmployeePage";
import NavBar from "./components/NavBar/NavBar";
import Wrapper from "./components/Wrapper/Wrapper";
import { useState } from "react";

const data = [
  {
    image:
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    name: "James King",
    title: "President and CEO",
    callOffice: "08382023890",
    callMobile: "30838480504",
    sms: "03853803850",
    email: "james@email.com",
  },
  {
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    name: "Julie Taylor",
    title: "VP of markating",
    callOffice: "89903893802",
    callMobile: "809830920",
    sms: "8093809390",
    email: "julie@email.com",
  },
  {
    image:
      "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    name: "Ray Moore",
    title: "VP of sales",
    callOffice: "9384903802",
    callMobile: "80983093402",
    sms: "809380938902",
    email: "ray@email.com",
  },
  {
    image:
      "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    name: "Donell Khaled",
    title: "FE Web Developer",
    callOffice: "235354646",
    callMobile: "80983644646",
    sms: "809380938902",
    email: "ray@email.com",
  },
];

const newEmployee = {
  image:
    "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  name: "Mike Min",
  title: "BE Web Developer",
  callOffice: "235354646",
  callMobile: "80983644646",
  sms: "809380938902",
  email: "mike@email.com",
};

function App() {
  const [employeeData, setEmpoyeeData] = useState(data);

  const handleAddEmployee = () => {
    setEmpoyeeData([...data, newEmployee]);
  };

  return (
    <div className='App'>
      <NavBar />
      <Wrapper>
        <HomePage employeeData={employeeData} />
        <EmployeePage employeeData={employeeData} />
      </Wrapper>
      <button onClick={handleAddEmployee}>Add Employee</button>
    </div>
  );
}

export default App;

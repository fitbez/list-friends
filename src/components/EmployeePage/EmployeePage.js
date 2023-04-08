import EmployeeDetail from "../EmployeeDetail/EmployeeDetail";
import Header from "../Header/Header";
import "./EmployeePage.css";

function EmployeePage() {
  return (
    <div className='employee-page'>
      <Header headerTitle='Employee' />
      <EmployeeDetail />
    </div>
  );
}

export default EmployeePage;

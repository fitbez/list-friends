import EmployeeDetail from "../EmployeeDetail/EmployeeDetail";
import Header from "../Header/Header";
import "./EmployeePage.css";
import { useMediaQuery } from "react-responsive";

function EmployeePage() {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  return (
    <>
      {!isMobile && (
        <div className='employee-page'>
          <Header headerTitle='Employee' />
          <EmployeeDetail />
        </div>
      )}
    </>
  );
}

export default EmployeePage;

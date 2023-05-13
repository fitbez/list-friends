import Wrapper from "../components/Wrapper/Wrapper";
import HomePage from "../components/HomePage/HomePage";
import EmployeePage from "../components/EmployeePage/EmployeePage";
import NavBar from "../components/NavBar/NavBar";

const EmployeeListPage = () => {
  return (
    <>
      <NavBar />
      <Wrapper>
        <HomePage />
        <EmployeePage />
      </Wrapper>
    </>
  );
};

export default EmployeeListPage;

import AddEmployee from "../components/AddEmployee/AddEmployee";
import Wrapper from "../components/Wrapper/Wrapper";
import NavBar from "../components/NavBar/NavBar";

const AddEmployeePage = () => {
  return (
    <>
      <NavBar />
      <Wrapper>
        <AddEmployee />
      </Wrapper>
    </>
  );
};

export default AddEmployeePage;

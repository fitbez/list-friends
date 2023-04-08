import EmployeeList from "../EmployeeList/EmployeeList";
import Header from "../Header/Header";
import Search from "../Search/Search";
import "./HomePage.css";

function HomePage(props) {
  return (
    <div className='home-page'>
      <Header headerTitle='Employee Directory' />
      <Search />
      <EmployeeList employeeData={props.employeeData} />
    </div>
  );
}

export default HomePage;

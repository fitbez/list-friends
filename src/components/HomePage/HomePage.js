import EmployeeList from "../EmployeeList/EmployeeList";
import Header from "../Header/Header";
import Search from "../Search/Search";
import "./HomePage.css";

function HomePage() {
  return (
    <div className='home-page'>
      <Header headerTitle='Employee Directory' />
      <Search />
      <EmployeeList />
    </div>
  );
}

export default HomePage;

import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import EmployeePage from "./components/EmployeePage/EmployeePage";
import NavBar from "./components/NavBar/NavBar";

// function
// class Component

// PascalCasing
function App() {
  return (
    <div className='App'>
      <NavBar />
      <HomePage />
      <EmployeePage />
    </div>
  );
}

export default App;

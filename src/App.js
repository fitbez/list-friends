import "./App.css";
import HomePage from "./pages/HomePage";
import AddEmployeePage from "./pages/AddEmployeePage";
import { Routes, Route } from "react-router-dom";
import EmployeeListPage from "./pages/EmployeeListPage";
import { EmployeeProvider } from "./EmployeeAppContext";
import LoginPage from "./pages/LoginPage";

import { ThemeProvider, createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
`;

const theme = {
  primary: "#2196F3",
  secondary: "red",
  primaryHeaderFontSize: "68",
  paragraphFontSize: "24",
  mobile: "768",
  tablet: "992",
  laptop: "1022",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <EmployeeProvider>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/add-employee' element={<AddEmployeePage />} />
          <Route path='/employee-list' element={<EmployeeListPage />} />
          <Route path='/login' element={<LoginPage />} />
        </Routes>
      </EmployeeProvider>
    </ThemeProvider>
  );
}

export default App;

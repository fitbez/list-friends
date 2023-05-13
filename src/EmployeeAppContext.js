import React, { useState, useEffect } from "react";
import axios from "axios";

// Create the context
export const EmployeeContext = React.createContext();

// Create a provider component
export const EmployeeProvider = (props) => {
  const [employeeInfo, setEmployeeInfo] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const apiUrl =
    "https://lit-dusk-21328.herokuapp.com/api/employees/allemployees";

  async function getEmployee() {
    try {
      const response = await axios.get(apiUrl);
      const data = await response.data;
      setEmployeeInfo(data);
    } catch (error) {
      setIsError(true);
    }
  }

  useEffect(() => {
    getEmployee();
  }, []);

  const handleSearch = () => {
    const filteredData = employeeInfo.filter(({ name }) => {
      return name === inputValue;
    });
    console.log("filtered data", filteredData);
    setEmployeeInfo(filteredData);
  };
  return (
    <EmployeeContext.Provider
      value={{
        employeeInfo,
        setEmployeeInfo,
        inputValue,
        setInputValue,
        isError,
        setIsError,
        isLoading,
        setIsLoading,
        handleSearch,
      }}
    >
      {props.children}
    </EmployeeContext.Provider>
  );
};

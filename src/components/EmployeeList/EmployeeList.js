import EmployeeListItem from "../EmployeeListItem/EmployeeListItem";
import { useContext } from "react";
import { EmployeeContext } from "../../EmployeeAppContext";

const EmployeeList = () => {
  const { isError } = useContext(EmployeeContext);
  return (
    <>
      {isError !== false && (
        <p style={{ color: "red" }}>Server error please try again</p>
      )}
      <EmployeeListItem />
    </>
  );
};

export default EmployeeList;

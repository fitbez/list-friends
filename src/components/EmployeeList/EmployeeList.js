import EmployeeListItem from "../EmployeeListItem/EmployeeListItem";

const EmployeeList = (props) => {
  console.log("props from employee list", props);
  return (
    <>
      <EmployeeListItem employeeData={props.employeeData} />
    </>
  );
};

export default EmployeeList;

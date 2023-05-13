import "./EmployeeListItem.css";
import { useContext } from "react";
import { EmployeeContext } from "../../EmployeeAppContext";

function EmployeeListItem() {
  const { employeeInfo } = useContext(EmployeeContext);
  return (
    <>
      {employeeInfo.map(({ image, name, occupation }, index) => {
        return (
          <div className='employee-list-item' key={index}>
            <img src={image} alt='some here' />
            <div className='employee-content'>
              <h4 className='employee-name'>{name}</h4>
              <p className='employee-title'>{occupation}</p>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default EmployeeListItem;

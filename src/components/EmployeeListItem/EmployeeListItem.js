import "./EmployeeListItem.css";

function EmployeeListItem({ employeeData }) {
  return (
    <>
      {employeeData.map(({ image, name, title }) => {
        return (
          <>
            <div className='employee-list-item'>
              <img src={image} alt='some here' />
              <div className='employee-content'>
                <h4 className='employee-name'>{name}</h4>
                <p className='employee-title'>{title}</p>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}

export default EmployeeListItem;

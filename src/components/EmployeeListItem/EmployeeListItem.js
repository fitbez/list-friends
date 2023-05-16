import "./EmployeeListItem.css";
import { useContext } from "react";
import { EmployeeContext } from "../../EmployeeAppContext";
import { Card } from "@mui/material";
import styled from "styled-components";

const StyledCard = styled(Card)`
  display: flex;
  padding: 0.5rem 0.2rem;
  gap: 10px;
  margin: 5px 0px;
  cursor: pointer;
`;

function EmployeeListItem() {
  const { employeeInfo, setEmployeeDetail } = useContext(EmployeeContext);

  return (
    <>
      {employeeInfo.map(({ image, name, occupation }, index) => {
        return (
          <StyledCard
            key={index}
            onClick={() => setEmployeeDetail(employeeInfo[index])}
          >
            <img src={image} alt='some here' />
            <div className='employee-content'>
              <h4 className='employee-name'>{name}</h4>
              <p className='employee-title'>{occupation}</p>
            </div>
          </StyledCard>
        );
      })}
    </>
  );
}

export default EmployeeListItem;

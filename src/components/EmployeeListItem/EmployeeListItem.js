import "./EmployeeListItem.css";
import { useContext } from "react";
import { EmployeeContext } from "../../EmployeeAppContext";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Card,
} from "@mui/material";
import EmployeeDetail from "../EmployeeDetail/EmployeeDetail";

const StyledCard = styled.div`
  display: flex;
  padding: 0.5rem 0.2rem;
  gap: 10px;
  margin: 5px 0px;
  cursor: pointer;
  width: 100%;
`;
const StyledCardDesktop = styled(Card)`
  display: flex;
  padding: 0.5rem 0.2rem;
  gap: 10px;
  margin: 5px 0px;
  cursor: pointer;
`;
const StyledAccordion = styled(Accordion)`
  margin-top: 1rem;
`;

function EmployeeListItem() {
  const { employeeInfo, setEmployeeDetail } = useContext(EmployeeContext);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <>
      {isMobile &&
        employeeInfo.map(({ image, name, occupation }, index) => {
          return (
            <StyledAccordion>
              <AccordionSummary
                // expandIcon={<ExpandMoreIcon />}
                aria-controls='panel1a-content'
                id='panel1a-header'
              >
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
              </AccordionSummary>
              <AccordionDetails>
                <EmployeeDetail />
              </AccordionDetails>
            </StyledAccordion>
          );
        })}
      {!isMobile &&
        employeeInfo.map(({ image, name, occupation }, index) => {
          return (
            <StyledCardDesktop
              key={index}
              onClick={() => setEmployeeDetail(employeeInfo[index])}
            >
              <img src={image} alt='some here' />
              <div className='employee-content'>
                <h4 className='employee-name'>{name}</h4>
                <p className='employee-title'>{occupation}</p>
              </div>
            </StyledCardDesktop>
          );
        })}
    </>
  );
}

export default EmployeeListItem;

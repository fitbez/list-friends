import "./EmployeeListItem.css";
import { useContext, useState } from "react";
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
import axios from "axios";

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
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0.2rem;
  gap: 10px;
  margin: 5px 0px;
  cursor: pointer;
`;
const StyledAccordion = styled(Accordion)`
  margin-top: 1rem;
`;

const StyledDiv = styled.div`
  display: flex;
  padding: 0.5rem 0.2rem;
  align-items: center;
  gap: 10px;
  margin: 5px 0px;
  cursor: pointer;
`;
function EmployeeListItem() {
  const { employeeInfo, setEmployeeDetail } = useContext(EmployeeContext);
  const isMobile = useMediaQuery({ maxWidth: 768 });
  console.log("employee data", employeeInfo);

  const handleDelete = (id) => {
    axios.delete(
      `https://calm-everglades-09552-105a0b4519dc.herokuapp.com/api/employee/${id}`
    );
  };

  return (
    <>
      {isMobile &&
        employeeInfo.map(({ imageUrl, name, occupation, _id }, index) => {
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
                  <img src={imageUrl} alt='some here' />
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
        employeeInfo.map(({ imageUrl, name, occupation, _id }, index) => {
          return (
            <StyledCardDesktop
              key={index}
              onClick={() => setEmployeeDetail(employeeInfo[index])}
            >
              <StyledDiv>
                <img src={imageUrl} alt='some here' />
                <div className='employee-content'>
                  <h4 className='employee-name'>{name}</h4>
                  <p className='employee-title'>{occupation}</p>
                </div>
              </StyledDiv>
              <div style={{ textAlign: "left", paddingRight: "1rem" }}>
                <p
                  onClick={() => {
                    handleDelete(_id);
                  }}
                >
                  Delete
                </p>
              </div>
            </StyledCardDesktop>
          );
        })}
    </>
  );
}

export default EmployeeListItem;

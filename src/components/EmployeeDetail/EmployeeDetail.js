import { useContext } from "react";
import { EmployeeContext } from "../../EmployeeAppContext";
import { Card, Typography, Skeleton } from "@mui/material";
import styled from "styled-components";

const StyledEmployeeDetail = styled(Card)`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
`;

const StyledEmployeeProfile = styled(Card)`
  display: flex;
  justfiy-content: flex-start;
  align-items: center;
  padding: 1rem 1.5rem;
  gap: 1rem;
`;

const StyledEmployeeContent = styled(Card)`
  display: flex;
  flex-direction: column;
  padding: 1rem 1.5rem;
  gap: 0.5rem;
`;

const StyledImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;

const StyledTypography = styled(Typography)`
  font-weight: bold !important;
`;

function EmployeeDetail() {
  const { employeeDetail, isLoading } = useContext(EmployeeContext);

  return (
    <StyledEmployeeDetail>
      <StyledEmployeeProfile>
        {isLoading ? (
          <Skeleton
            animation='wave'
            variant='circular'
            width={80}
            height={80}
          />
        ) : (
          <StyledImage src={employeeDetail.imageUrl} alt='' />
        )}
        {isLoading ? (
          <Skeleton animation='wave' width={150} />
        ) : (
          <p>{employeeDetail.name}</p>
        )}
      </StyledEmployeeProfile>
      <StyledEmployeeContent>
        {isLoading ? (
          <>
            <Skeleton
              animation='wave'
              height={20}
              style={{ marginBottom: 6 }}
              width='40%'
            />
            <Skeleton animation='wave' height={10} width='50%' />
          </>
        ) : (
          <>
            <StyledTypography>Call Office</StyledTypography>
            <p>{employeeDetail.callOffice}</p>
          </>
        )}
      </StyledEmployeeContent>
      <StyledEmployeeContent>
        {isLoading ? (
          <>
            <Skeleton
              animation='wave'
              height={20}
              style={{ marginBottom: 6 }}
              width='40%'
            />
            <Skeleton animation='wave' height={10} width='50%' />
          </>
        ) : (
          <>
            <StyledTypography>Call Mobile</StyledTypography>
            <p>{employeeDetail.callMobile}</p>
          </>
        )}
      </StyledEmployeeContent>
      <StyledEmployeeContent>
        {isLoading ? (
          <>
            <Skeleton
              animation='wave'
              height={20}
              style={{ marginBottom: 6 }}
              width='40%'
            />
            <Skeleton animation='wave' height={10} width='50%' />
          </>
        ) : (
          <>
            <StyledTypography>SMS</StyledTypography>
            <p>{employeeDetail.sms}</p>
          </>
        )}
      </StyledEmployeeContent>
      <StyledEmployeeContent>
        {isLoading ? (
          <>
            <Skeleton
              animation='wave'
              height={20}
              style={{ marginBottom: 6 }}
              width='40%'
            />
            <Skeleton animation='wave' height={10} width='50%' />
          </>
        ) : (
          <>
            <StyledTypography>Email</StyledTypography>
            <p>{employeeDetail.email}</p>
          </>
        )}
      </StyledEmployeeContent>
    </StyledEmployeeDetail>
  );
}

export default EmployeeDetail;

import styled from "styled-components";
import { Button } from "@mui/material";

const StyledHeading = styled.h1`
  font-size: ${({ theme }) => theme.primaryHeaderFontSize}px;
`;

const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.secondary};
`;

const StyledHome = styled.div`
  margin-top: 2rem;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 1.5rem;
`;

const Home = () => {
  return (
    <StyledHome>
      <StyledHeading>Welcome Home!</StyledHeading>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit fugiat
        commodi dolore voluptates placeat delectus odio aliquid quam reiciendis
        vitae.
      </p>

      <StyledButtonContainer>
        <Button variant='contained'>Login</Button>
        <Button variant='outlined'>Register</Button>
      </StyledButtonContainer>
    </StyledHome>
  );
};

export default Home;

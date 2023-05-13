import styled from "styled-components";

const StyledHeading = styled.h1`
  font-size: ${({ theme }) => theme.primaryHeaderFontSize}px;
`;

const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.secondary};
`;

const Home = () => {
  return (
    <>
      <StyledHeading>Welcome Home!</StyledHeading>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit fugiat
        commodi dolore voluptates placeat delectus odio aliquid quam reiciendis
        vitae.
      </p>
      <StyledButton>Login</StyledButton>
      <StyledButton>Register</StyledButton>
    </>
  );
};

export default Home;

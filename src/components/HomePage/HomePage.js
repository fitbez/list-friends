import EmployeeList from "../EmployeeList/EmployeeList";
import Header from "../Header/Header";
import Search from "../Search/Search";
import "./HomePage.css";
import styled from "styled-components";

const StyledHomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

function HomePage() {
  return (
    <StyledHomeWrapper>
      <Header headerTitle='Employee Directory' />
      <Search />
      <EmployeeList />
    </StyledHomeWrapper>
  );
}

export default HomePage;

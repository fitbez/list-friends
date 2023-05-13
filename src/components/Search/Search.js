import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { EmployeeContext } from "../../EmployeeAppContext";
import { useContext } from "react";
import styled from "styled-components";

const StyledSearch = styled.div`
  width: 100%;
  display: flex;
  gap: 5px;
`;

function Search() {
  const { setInputValue, handleSearch } = useContext(EmployeeContext);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <StyledSearch>
      <input type='text' style={{ flexGrow: 3 }} onChange={handleInputChange} />
      <FontAwesomeIcon icon={faSearch} onClick={handleSearch} />
    </StyledSearch>
  );
}

export default Search;

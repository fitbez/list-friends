import Home from "../components/Home/Home";
import Wrapper from "../components/Wrapper/Wrapper";
import NavBar from "../components/NavBar/NavBar";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <Wrapper>
        <Home />
      </Wrapper>
    </>
  );
};

export default HomePage;

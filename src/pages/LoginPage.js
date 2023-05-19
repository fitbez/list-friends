import Login from "../components/Login/Login";
import Wrapper from "../components/Wrapper/Wrapper";
import NavBar from "../components/NavBar/NavBar";

const LoginPage = () => {
  return (
    <>
      <NavBar />
      <Wrapper>
        <Login />
      </Wrapper>
    </>
  );
};

export default LoginPage;

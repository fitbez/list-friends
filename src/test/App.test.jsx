import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import App from "../App";

describe("App component", () => {
  // let location = useLocation();
  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(
      <Router>
        <App />
      </Router>
    );
  });

  it("should render the logo text 'EMPLOYEE APP'", () => {
    // screen.debug();
    //Act
    const logo = screen.getAllByText("EMPLOYEE APP");

    //Assert
    expect(logo).toHaveLength(2);
  });
  it("should render Home menu item", () => {
    // screen.debug();
    //Act
    const home = screen.getAllByText("Home");

    //Assert
    expect(home).toHaveLength(2);
  });
  it("should render the Welcome Home! text", () => {
    screen.debug();
    //Act
    const welcomeHome = screen.getByText("Welcome Home");

    //Assert
    expect(welcomeHome).toBeInTheDocument();
  });
  it("should render the login page", async () => {
    // element is initially not present...
    const button = screen.getByText("Login");
    expect(button).toBeInTheDocument();

    await userEvent.click(button);
    // wait for appearance inside an assertion
    await waitFor(() => {
      expect(screen.getByText("Please enter your email")).toBeInTheDocument();
    });
  });
  it("should render the login component", async () => {
    // element is initially not present...
    const button = screen.getByText("Login");
    expect(button).toBeInTheDocument();

    await userEvent.click(button);
    // wait for appearance inside an assertion
    await waitFor(() => {
      const pathName = window.location.pathname;
      console.log("path name", pathName);
      expect(pathName).toBe("/login");
    });
  });
});

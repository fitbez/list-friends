import { render, screen, waitFor } from "@testing-library/react";
import AddEmployee from "../AddEmployee";
import userEvent from "@testing-library/user-event";
import { EmployeeProvider } from "../../../EmployeeAppContext";

describe("App component", () => {
  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(
      <EmployeeProvider>
        <AddEmployee />
      </EmployeeProvider>
    );
  });

  it("should render the add employee header", () => {
    screen.debug();
    //Act
    const header = screen.getByText("Add Employee");
    expect(header).toBeInTheDocument();
  });
  it("should render the name input field", () => {
    screen.debug();
    //Act
    const name = screen.getByPlaceholderText("full name");
    expect(name).toBeInTheDocument();
  });

  it("should render the login page", async () => {
    // element is initially not present...
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();

    await userEvent.click(button);
    // wait for appearance inside an assertion
    await waitFor(() => {
      expect(screen.getByText("Succes")).toBeInTheDocument();
    });
  });
});

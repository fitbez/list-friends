// functional component
// class components
import { Fragment } from "react";
import "./NavBar.css";

// ul {
//     display: flex;
//     justify-content: space-between;
//     width: 35%;
//     list-style: none;
// }

function NavBar() {
  return (
    <Fragment>
      <div className='nav' style={SyledNav}>
        <h4>Employee App</h4>
        <ul
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "35%",
            listStyle: "none",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          <li>Home</li>
          <li>Add Employee</li>
          <li>Employee List</li>
          <li>Logout</li>
        </ul>
      </div>
    </Fragment>
  );
}

// .nav {
//     background-color: aqua;
//     display: flex;
//     justify-content: space-between;
//     padding: 5px 25px;
// }

const SyledNav = {
  backgroundColor: "#2196F3",
  display: "flex",
  justifyContent: "space-between",
  padding: "5px 25px",
  boxShadow: "0px 4px 8px rgba(0, 0,0, 0.26)",
};

export default NavBar;

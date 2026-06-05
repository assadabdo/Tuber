import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import { SearchBar } from "./SearchBar";

import TuberLogo from "../Images/Tuber-Logo.png";

export const NavBar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: "sticky",
      zIndex: 6,
      background: "#000",
      top: "0px",
      marginBottom: "-14px",
      justifyContent: "space-between",
    }}
  >
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img
        className="the-img"
        src={TuberLogo}
        alt="logo"
        style={{ width: "90px", height: "90px" }}
      />{" "}
      {/* <span
        style={{
          color: "white",
          fontSize: "23px",
          fontWeight: "bold",
          marginLeft: "5px",
        }}
      >
        Tuber
      </span> */}
    </Link>
    <SearchBar />
  </Stack>
);

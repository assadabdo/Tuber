import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export const SearchBar = () => {
  const [searchterm, setSearchterm] = useState("");
  const Navigate = useNavigate();

  const handleSumbit = (e) => {
    e.preventDefault();
    if (searchterm) {
      Navigate(`search/${searchterm}`);
    }
    setSearchterm("");
  };

  return (
    <Paper
      className="paper"
      elevation={9}
      component="form"
      onSubmit={handleSumbit}
      sx={{
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        pl: 2,
        boxShadow: "none",
        mr: { sm: 5 },
      }}
    >
      <input
        className="search-bar"
        placeholder="Search..."
        value={searchterm}
        onChange={(e) => setSearchterm(e.target.value)}
      />
      <IconButton
        type="submit"
        sx={{ p: "10px", color: "orange" }}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

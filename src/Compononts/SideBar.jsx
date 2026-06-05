import { useState } from "react";
import React, { createContext, useContext } from "react";
import { Stack } from "@mui/material";
import { categories } from "../utils/constants";

// Holds the SideBar component so callers can render it with props.
export const StateContext = createContext(null);

export const StateContextProvider = ({ children }) => {
  const [playlistId, setPlaylistId] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("News");
  const SideBar = ({ selectedCategory, setSelectedCategory }) => (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { xs: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((category) => (
        <button
          className="category-btn"
          onClick={() => setSelectedCategory(category.name)}
          style={{
            background:
              category.name === selectedCategory ? "orange" : "transparent",
            color: "white",
          }}
          key={category.name}
        >
          <span
            style={{
              color: category.name === selectedCategory ? "white" : "orange",
              marginRight: "15px",
            }}
          >
            {category.icon}
          </span>
          <span
            style={{
              opacity: category.name === selectedCategory ? "1" : "0.8",
            }}
          >
            {category.name}
          </span>
        </button>
      ))}
    </Stack>
  );

  // const getplaylistId = () => {
  //   fetchFromAPI(
  //     `search?part=snippet&type=playlist&q=${selectedCategory}`,
  //   ).then((data) => setPlaylistId(data?.items[0]?.id?.playlistId));
  // };

  return (
    <StateContext.Provider
      value={{
        SideBar,
        selectedCategory,
        setSelectedCategory,
        // getplaylistId,
        playlistId,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

// Supplier returns the SideBar component.
export const Supplier = () => useContext(StateContext);

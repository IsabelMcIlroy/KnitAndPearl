import { useState, useEffect } from "react";
import { Box, Typography, TextField } from "@mui/material";
import { palette } from "../assets/theme";
import { ViewProjectCard } from "./HelperComponents/ViewProjectCard";

export const ViewProject = () => {
  const displayProjectsArray = [
    { projectName: "Trees", projectType: "Hat" },
    { projectName: "Mountains", projectType: "Sweater" },
    { projectName: "Cats", projectType: "Socks" },
    { projectName: "Fish", projectType: "Socks" },
  ];
  console.log(displayProjectsArray);
  const [allProjects] = useState({ displayProjectsArray });
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState({ displayProjectsArray });
  useEffect(() => {
    const projectsToShow = allProjects.filter((p) =>
      p.projectName.toLowerCase().includes(search)
    );
    setSearchResults(projectsToShow);
  }, [search, setSearchResults, allProjects]);
  return (
    <Box
      sx={{
        backgroundColor: palette.knittingGray,
        minHeight: "100vh",
      }}
    >
      <Box
        sx={{
          padding: "112px 24px 12px 24px",
        }}
      >
        <Box
          sx={{
            margin: "0 24px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontFamily: "La Belle Aurore",
              color: palette.knittingPurple,
            }}
          >
            View Projects
          </Typography>
          <TextField
            label="Search Projects"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            margin: "0px 24px",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
          }}
        >
          {searchResults.map((displayProjectsArray) => {
            return (
              <ViewProjectCard
                key={displayProjectsArray.projectName}
                projectName={displayProjectsArray.projectName}
                projectType={displayProjectsArray.projectType}
              />
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

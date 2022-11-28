import { useState, useEffect } from "react";
import useFetch from "react-fetch-hook";
import { Box, Typography, TextField, Fab } from "@mui/material";
import { palette } from "../assets/theme";
import { ViewProjectCard } from "./HelperComponents/ViewProjectCard";
// import { ViewProjectDataList } from "./ProjectData/ProjectData";
import { NewProjectSizeAndColourSelectionModal } from "../HelperComponents/NewProjectSizeAndColourSelectionModal";

export const ViewProject = () => {
  // const { isLoading, data, error } = useFetch("/currentUser");
  // console.log(isLoading);
  // console.log(error);
  // console.log(data);
  const { isLoading, data: allProjects, error } = useFetch("/projects");
  console.log(isLoading);
  console.log(error);
  console.log(allProjects);
  const [isOpen, setIsOpen] = useState(false);
  // const [allProjects] = useState(ViewProjectDataList);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  useEffect(() => {
    const projectsToShow = allProjects?.filter(
      (project) =>
        project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.type.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(projectsToShow);
  }, [searchQuery, allProjects]);
  if (isLoading) return "Loading...";
  if (error) return "Error!";
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
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
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
          {searchResults?.map((displayProjectsArray) => {
            return (
              <ViewProjectCard
                key={displayProjectsArray.id}
                projectName={displayProjectsArray.name}
                projectType={displayProjectsArray.type}
              />
            );
          })}
        </Box>
      </Box>
      <Fab
        onClick={() => {
          setIsOpen(true);
        }}
        sx={{
          position: "fixed",
          bottom: "24px",
          right: "24px",
          padding: "8px",
          height: "84px",
          width: "84px",
          backgroundColor: palette.knittingBlue,
          color: palette.knittingGray,
          "&:hover": {
            backgroundColor: "#0B5082",
          },
        }}
      >
        New Project
      </Fab>
      <NewProjectSizeAndColourSelectionModal
        open={isOpen}
        setIsOpen={setIsOpen}
      />
    </Box>
  );
};

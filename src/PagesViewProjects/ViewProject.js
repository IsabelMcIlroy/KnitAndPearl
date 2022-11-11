import { useState, useEffect } from "react";
import { Box, Typography, TextField, Fab } from "@mui/material";
import { palette } from "../assets/theme";
import { ViewProjectCard } from "./HelperComponents/ViewProjectCard";
import { ViewProjectDataList } from "./ProjectData/ProjectData";
import { NewProjectSizeAndColourSelectionModal } from "../HelperComponents/NewProjectSizeAndColourSelectionModal";

export const ViewProject = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch("./currentUser")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  console.log(data);
  const [isOpen, setIsOpen] = useState(false);
  const [allProjects] = useState(ViewProjectDataList);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  useEffect(() => {
    const projectsToShow = allProjects.filter(
      (project) =>
        project.projectName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.projectType.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(projectsToShow);
  }, [searchQuery, allProjects]);
  if (loading) return "Loading...";
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

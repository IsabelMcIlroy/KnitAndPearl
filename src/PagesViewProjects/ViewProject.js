import { useState, useEffect } from "react";
import useFetch from "react-fetch-hook";
import { Box, Typography, TextField } from "@mui/material";
import { palette } from "../assets/theme";
import { ViewProjectCard } from "./HelperComponents/ViewProjectCard";
import { ViewProjectDataList } from "./ProjectData/ProjectData";
import { WelcomePageOptionButtons } from "../PagesHome/HelperComponents/WelcomePageOptionButtons";
import { NewProjectSizeAndColourSelectionModal } from "../HelperComponents/NewProjectSizeAndColourSelectionModal";

export const ViewProject = () => {
  const { isLoading, data, error } = useFetch("/projects");
  const [isOpen, setIsOpen] = useState(false);
  const [allProjects] = useState(ViewProjectDataList);
  const [searchQuery, setSearchQuery] = useState("");
  //const [searchResults, setSearchResults] = useState([]);
  useEffect(() => {
    const projectsToShow = allProjects.filter(
      (project) =>
        project.projectName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.projectType.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(projectsToShow);
  }, [searchQuery, allProjects]);
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
          {isLoading && <Typography variant="h5">Loading...</Typography>}
          {error && (
            <Typography variant="h5">
              There has been a problem, {error}!
            </Typography>
          )}
          {data &&
            data.map(({ name, type }) => (
              <ViewProjectCard
                key={name}
                projectName={name}
                projectType={type}
              />
            ))}
          {/* {searchResults.map((displayProjectsArray) => {
            return (
              <ViewProjectCard
                key={displayProjectsArray.projectName}
                projectName={displayProjectsArray.projectName}
                projectType={displayProjectsArray.projectType}
              />
            );
          })} */}
        </Box>
        <Box sx={{ position: "sticky" }}>
          <WelcomePageOptionButtons
            btnText="New Project"
            onClick={() => {
              setIsOpen(true);
            }}
          />
          <NewProjectSizeAndColourSelectionModal
            open={isOpen}
            setIsOpen={setIsOpen}
          />
        </Box>
      </Box>
    </Box>
  );
};

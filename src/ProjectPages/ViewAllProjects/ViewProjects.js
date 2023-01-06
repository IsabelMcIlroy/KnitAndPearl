import { useState } from "react";
import useFetch from "react-fetch-hook";
import { Box, Typography, TextField, Fab } from "@mui/material";
import { palette } from "../../assets/theme";
import { ViewProjectCard } from "./HelperComponents/ViewProjectCard";
import { NewProjectSizeAndColourSelectionModal } from "../../HelperComponents/NewProjectSizeAndColourSelectionModal";

export const ViewProjects = () => {
  const { isLoading, data: allProjects, error } = useFetch("/projects");
  const {
    isLoading: usersProjectsLoading,
    data: allUsersProjects,
    error: usersProjectsError,
  } = useFetch("/projects/allUsers");
  console.log(usersProjectsLoading);
  console.log(allUsersProjects);
  console.log(usersProjectsError);
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const projectsToShow = allProjects?.filter(
    (project) =>
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.type.toLowerCase().includes(searchQuery.toLowerCase())
  );
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
          {isLoading && (
            <Typography
              variant="p"
              sx={{
                color: palette.knittingPurple,
                alignItems: "center",
                display: "flex",
                height: "50vh",
              }}
            >
              Loading...
            </Typography>
          )}
          {error && (
            <Typography
              variant="p"
              sx={{
                color: palette.knittingErrorColour,
                alignItems: "center",
                display: "flex",
                height: "50vh",
              }}
            >
              error
            </Typography>
          )}
          {allProjects < 1 && (
            <Typography
              variant="p"
              sx={{
                color: palette.knittingPurple,
                alignItems: "center",
                display: "flex",
                height: "50vh",
              }}
            >
              You don't have an projects yet!
            </Typography>
          )}
          {projectsToShow?.map((displayProjectsArray) => {
            return (
              <ViewProjectCard
                key={displayProjectsArray.id}
                projectName={displayProjectsArray.name}
                projectType={displayProjectsArray.type}
                projectID={displayProjectsArray.id}
                currentRows={displayProjectsArray.rows}
                currentColumns={displayProjectsArray.columns}
                gridColours={displayProjectsArray.grid_colours}
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

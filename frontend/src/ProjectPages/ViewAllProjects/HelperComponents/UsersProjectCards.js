import React from "react";
import { Box, Typography } from "@mui/material";
import { palette } from "../../../assets/theme";
import { ViewProjectCard } from "./ViewProjectCard";

export const UsersProjectCards = ({
  searchQuery,
  isLoading,
  allProjects,
  error,
}) => {
  const projectsToShow = allProjects?.filter(
    (project) =>
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.type.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
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
            currentRows={displayProjectsArray.grid_rows}
            currentColumns={displayProjectsArray.grid_columns}
            gridColours={displayProjectsArray.grid_colours}
            username={displayProjectsArray.username}
            ownerID={displayProjectsArray.owner_id}
          />
        );
      })}
    </Box>
  );
};

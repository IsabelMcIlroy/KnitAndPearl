import { useParams } from "react-router-dom";
import useFetch from "react-fetch-hook";
import { Typography } from "@mui/material";
import { Project } from "../HelperComponents/Project";
import { palette } from "../../assets/theme";

export const ProjectPage = () => {
  let { id } = useParams();
  const { isLoading, data, error } = useFetch(`/projects/${id}`);
  return (
    <>
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
      {data && <Project project={data} />}
    </>
  );
};

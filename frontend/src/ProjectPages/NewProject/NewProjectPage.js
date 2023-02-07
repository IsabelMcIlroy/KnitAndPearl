import { useParams } from "react-router-dom";
import useFetch from "react-fetch-hook";
import { Typography } from "@mui/material";
import { NewProject } from "./HelperComponents/NewProject.js";
import { palette } from "../../assets/theme";

export const NewProjectPage = () => {
  let { id } = useParams();
  const { isLoading, data, error } = useFetch(
    `https://backend.knitandpearl.online/projects/${id}`
  );
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
      {data && <NewProject project={data} />}
    </>
  );
};

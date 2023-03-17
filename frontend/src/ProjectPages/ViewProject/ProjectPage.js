import { useParams } from "react-router-dom";
import useFetch from "react-fetch-hook";
import { Typography } from "@mui/material";
import { Project } from "./HelperComponents/Project";
import { palette } from "../../assets/theme";
import { PageNotFoundPage } from "../../PageNotFoundPage/PageNotFoundPage";

export const ProjectPage = () => {
  let { id } = useParams();
  const { isLoading, data, error } = useFetch(`/api/projects/${id}`);
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
      {error && <PageNotFoundPage />}
      {data && <Project project={data} />}
    </>
  );
};

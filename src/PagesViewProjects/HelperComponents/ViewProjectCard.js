import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Box,
} from "@mui/material";
import exampleImg from "../../images/grid.jpg";

export const ViewProjectCard = ({ projectName }, { projectType }) => {
  return (
    <>
      <Card sx={{ width: "50%", margin: "12px" }}>
        <CardContent sx={{ display: "flex" }}>
          <img
            src={exampleImg}
            alt="example"
            style={{ width: "25%", margin: "8px" }}
          />
          <Box sx={{ margin: "8px" }}>
            <Typography variant="h5" component="div">
              {projectName}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {projectType} Sweater
            </Typography>
            <CardActions>
              <Button size="small">View</Button>
            </CardActions>
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

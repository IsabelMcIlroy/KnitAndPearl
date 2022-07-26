import { useLocation } from "react-router-dom";
import { NavBar } from "../NavBar";
import { NewProjectEditorDrawer } from "./HelperComponents/NewProjectEditorDrawer";

export const NewProject = () => {
  const { state } = useLocation();
  const {
    currentProjectName,
    currentProjectType,
    currentRows,
    currentColumns,
  } = state;
  console.log(currentRows);
  console.log(currentColumns);
  return (
    <>
      <NavBar />
      <NewProjectEditorDrawer
        currentProjectName={currentProjectName}
        currentProjectType={currentProjectType}
      />
    </>
  );
};

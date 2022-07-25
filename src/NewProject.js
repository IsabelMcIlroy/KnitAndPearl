import { useLocation } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { NewProjectEditorDrawer } from "./components/NewProjectEditorDrawer";

export const NewProject = () => {
  const { state } = useLocation();
  const {
    currentProjectName,
    currentProjectType,
    currentRows,
    currentColumns,
  } = state;
  console.log(currentProjectName);
  console.log(currentProjectType);
  console.log(currentRows);
  console.log(currentColumns);
  return (
    <>
      <NavBar />
      <NewProjectEditorDrawer />
    </>
  );
};

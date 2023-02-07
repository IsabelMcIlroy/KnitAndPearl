import { RouterProvider } from "react-router-dom";
import { router } from "./Router";

export const App = () => {
  return <RouterProvider router={router} />;
};

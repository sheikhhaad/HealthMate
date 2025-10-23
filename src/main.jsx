import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout.jsx";
import Aireport from "./Page/Aireport.jsx";
import Home from "./Page/Home.jsx";
import Myreport from "./Page/Myreport.jsx";
import Profile from "./Page/Profile.jsx";
let rounter = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/myreport",
        element: <Myreport />,
      },
      {
        path: "/aireport",
        element: <Aireport />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(<RouterProvider router={rounter} />);

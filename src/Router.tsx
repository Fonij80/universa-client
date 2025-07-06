import { createBrowserRouter } from "react-router-dom";
import { Layout } from "@/components";
import { NotFound } from "./pages";
import { appRoutes } from "@/constants/routes";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        ...appRoutes
          .filter((route) => route.path !== "/")
          .map((route) => ({
            path: route.path.replace(/^\//, ""),
            element: route.element,
            index: route.path === "/",
          })),
        {
          index: true,
          element: appRoutes.find((r) => r.path === "/")?.element,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ],
  {
    basename: import.meta.env.BASE_URL,
  }
);

export default router;

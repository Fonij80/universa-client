import { Landing, Dashboard, About } from "@/pages";

export const appRoutes = [
  { path: "/", element: <Landing />, labelKey: "landing" },
  { path: "/dashboard", element: <Dashboard />, labelKey: "dashboard" },
  { path: "/about", element: <About />, labelKey: "about" },
];

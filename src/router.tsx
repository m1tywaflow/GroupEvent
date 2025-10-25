import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

export const ROUTER_PATHS = {
  HOME: "/",
  ABOUT: "/about",
  EVENT: "/event",
};

const AppLayout = lazy(() => import("./App"));
const HomePage = lazy(() => import("./pages/HomePage/Home"));
const AboutPage = lazy(() => import("./pages/AboutPage/AboutPage"));
const EventPage = lazy(() => import("./pages/EventPage/EventPage"));

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: ROUTER_PATHS.ABOUT, element: <AboutPage /> },
      { path: ROUTER_PATHS.EVENT, element: <EventPage /> },
    ],
  },
]);

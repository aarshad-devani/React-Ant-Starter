import Home from "./Pages/Home";
export default [
  {
    exact: true,
    path: "/Home",
    isAuthenticated: false,
    component: Home
  },
  {
    exact: true,
    path: "/",
    isAuthenticated: false,
    component: Home
  }
];

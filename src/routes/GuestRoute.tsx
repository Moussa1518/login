import { Navigate, Outlet } from "react-router-dom";
import { PATHS } from "./paths";

const isAuthenticated = (): boolean => !!localStorage.getItem("token");

export default function GuestRoute() {
  return isAuthenticated() ? <Navigate to={PATHS.HOME} replace /> : <Outlet />;
}
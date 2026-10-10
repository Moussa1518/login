import { Navigate, Outlet } from "react-router-dom";
import { PATHS } from "./paths";

// Temporaire : on remplacera par un vrai contexte d'authentification
const isAuthenticated = (): boolean => !!localStorage.getItem("token");

export default function ProtectedRoute() {
  return isAuthenticated() ? <Outlet /> : <Navigate to={PATHS.LOGIN} replace />;
}
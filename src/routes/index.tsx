import { lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import { PATHS } from "./paths";
import AuthLayout from "../layouts/AuthLayout";
import GuestRoute from "./GuestRoute";
import ProtectedRoute from "./ProtectedRoute";

// Lazy loading : chaque page est chargée à la demande
const Register = lazy(() => import("../pages/Register"));
const Login = lazy(() => import("../pages/Login"));
const VerifyOtp = lazy(() => import("../pages/VerifyOtp"));
const Home = lazy(() => import("../pages/Home"));

export const router = createBrowserRouter([
  { path: PATHS.HOME, element: <Navigate to={PATHS.LOGIN} replace /> },

  // Pages pour les visiteurs non connectés
  {
    element: <GuestRoute />,
    children: [
      {
        element: <AuthLayout />,
        children: [
          { path: PATHS.REGISTER, element: <Register /> },
          { path: PATHS.LOGIN, element: <Login /> },
          { path: PATHS.VERIFY_OTP, element: <VerifyOtp /> },
        ],
      },
    ],
  },

  // Pages pour les utilisateurs connectés
  {
    element: <ProtectedRoute />,
    children: [{ path: PATHS.HOME, element: <Home /> }],
  },
  
]);
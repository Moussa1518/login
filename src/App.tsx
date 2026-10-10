import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

export default function App() {
  return (
    <Suspense fallback={<p>Chargement...</p>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}
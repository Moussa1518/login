import { Suspense } from "react";
import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <Suspense fallback={<p>Chargement...</p>}>
          {/* La page enfant s'affiche ici */}
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
}
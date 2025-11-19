import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, allowedRoles }) {
    const role = localStorage.getItem("role");

    if (!role) return <Navigate to="/" />;

    if (!allowedRoles.includes(role)) return <h1>Access Denied</h1>;

    return children;
}

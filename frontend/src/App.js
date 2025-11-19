import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import AdminDashboard from "./pages/AdminDashboard";
import ManagerDashboard from "./pages/ManagerDashboard";
import UserDashboard from "./pages/UserDashboard";
import ProtectedRoute from './routes/ProtectedRoute';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />

            <Route
                path="/admin"
                element={
                    <ProtectedRoute allowedRoles={["admin"]}>
                        <AdminDashboard />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/manager"
                element={
                    <ProtectedRoute allowedRoles={["manager", "admin"]}>
                        <ManagerDashboard />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/user"
                element={
                    <ProtectedRoute allowedRoles={["user", "manager", "admin"]}>
                        <UserDashboard />
                    </ProtectedRoute>
                }
            />
        </Routes>
    );
}

export default App;

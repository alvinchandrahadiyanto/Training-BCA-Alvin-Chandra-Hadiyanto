import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from './privateRoute';
import DetailsBook from "../pages/detailsBook/DetailsBook";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Dashboard from "../pages/dashboard/Dashboard";
import DashboardLogout from "../pages/dashboard/DashboardLogout";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route 
                    exact
                    path="/dashboard" 
                    element={
                    <PrivateRoute>
                        <Dashboard />
                    </PrivateRoute>
                } 
                    />
                <Route path="/dashboard+logout" element={<DashboardLogout />} />
                <Route path="/details/:id" element={<DetailsBook />} />
            </Routes>
        </BrowserRouter>
    )
}

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailsBook from "../pages/books/DetailsBook";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Dashboard from "../pages/dashboard/Dashboard";
import DashboardLogout from "../pages/dashboard/DashboardLogout";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<DashboardLogout />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/dashboard+logout" element={<DashboardLogout />} />
                <Route path="/details/:id" element={<DetailsBook />} />
            </Routes>
        </BrowserRouter>
    )
}

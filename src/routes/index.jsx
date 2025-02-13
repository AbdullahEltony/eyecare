
import { Navigate, useRoutes } from "react-router-dom";
import RootLayout from "../layouts/RootLayout.jsx";
import Login from "../pages/auth/Login.jsx";
import Register from "../pages/auth/Register.jsx";
import Dashboard from "../pages/Dashboard.jsx";
import AuthLayout from "../layouts/AuthLayout.jsx";
import Settings from "../pages/Settings.jsx";
import CreatePatient from "../pages/patients/CreatePatient.jsx";
import Patients from "../pages/patients";
import PreviewPatient from "../pages/patients/PreviewPatient.jsx";
import NewMedicalRecode from "../pages/patients/NewMedicalRecord.jsx";
import Receptions from "../pages/Receptions.jsx";
import Doctors from "../pages/doctors/Doctors.jsx";
import DoctorProfile from "../pages/doctors/DoctorProfile.jsx";
import Appointments from "../pages/Appointments.jsx";
import Payments from "../pages/payments/Payments.jsx";
import PreviewPayment from "../pages/payments/PreviewPayment.jsx";
import EditPayment from "../pages/payments/EditPayment.jsx";
import Invoices from "../pages/invoices/Invoices.jsx";
import CreateInvoice from "../pages/invoices/CreateInvoice.jsx";
import PreviewInvoice from "../pages/invoices/PreviewInvoice.jsx";
import EditInvoice from "../pages/invoices/EditEnvoice.jsx";
import Services from "../pages/Services.jsx";
import Medicines from "../pages/Medicins.jsx";
import Chats from "../pages/Chats.jsx";
import Reviews from "../pages/Reviews.jsx";
import Campaings from "../pages/Campaings.jsx";
import ForgotPassword from "../pages/auth/ForgotPassword.jsx";
import ChangePassword from "../pages/auth/ChangePassword.jsx";
const Router = () => {
    return useRoutes([
        {
            path: "/auth",
            element: < AuthLayout />,
            children: [
                { path: "login", element: <Login /> },
                { path: "register", element: <Register /> },
                { path: "forgot-password", element: <ForgotPassword /> },
                { path: "change-password", element: <ChangePassword /> },
            ]
        },
        {
            path: "/",
            element: <RootLayout />,
            children: [
                {
                    element: <Navigate to={"/dashboard"} replace />,
                    index: true
                },
                {
                    element: <Dashboard />,
                    path: "/dashboard"
                },
                {
                    element: <Settings />,
                    path: "/settings"
                },
                {
                    path: "patients", // Parent route for patients
                    element: <Patients />,
                },
                {
                    path: "/patients/create", // Parent route for patients
                    element: <CreatePatient />,
                },
                {
                    path: "/patients/preview/:id", // Parent route for patients
                    element: <PreviewPatient />,
                },
                {
                    path: "/new-medical-record/:id", // Parent route for patients
                    element: <NewMedicalRecode />,
                },
                {
                    path: "receptions",
                    element: <Receptions />
                },
                {
                    path: "doctors",
                    element: <Doctors />
                },
                {
                    path: "doctors/preview/:id",
                    element: <DoctorProfile />
                },
                {
                    path: "appointments",
                    element: <Appointments />
                },
                {
                    path: "payments",
                    element: <Payments />
                },
                {
                    path: "/payments/preview/:id",
                    element: <PreviewPayment />
                },
                {
                    path: "/payments/edit/:id",
                    element: <EditPayment />
                },
                {
                    path: "invoices",
                    element: <Invoices />
                },
                {
                    path: "invoices/create",
                    element: <CreateInvoice />
                },
                {
                    path: "invoices/preview/:id",
                    element: <PreviewInvoice />
                },
                {
                    path: "invoices/edit/:id",
                    element: <EditInvoice />
                },
                {
                    path: "services",
                    element: <Services />
                },
                {
                    path: "medicines",
                    element: <Medicines />
                },
                {
                    path: "chats",
                    element: <Chats />
                },
                {
                    path:'reviews',
                    element:<Reviews/>
                },
                {
                    path:'campaigns',
                    element:<Campaings/>
                },
                


            ]
        },
        {
            path: "*",
            element: <h2>Not Found</h2>
        }
    ])
}

export default Router

// const DashboardPage = Loadable(lazy(() => import("../pages/Dashboard.jsx")));
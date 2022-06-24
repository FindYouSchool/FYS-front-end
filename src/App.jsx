import React, { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Providers from "./contexts/Providers";
import { ToastContainer } from "react-toastify";
import { ROLES } from "./constants/Auth";
import SchoolOverview from "./pages/SchoolSheet/SchoolOverview/SchoolOverview";
import SchoolNotice from "./pages/SchoolSheet/SchoolNotice/SchoolNotice";
import SchoolEducation from "./pages/SchoolSheet/SchoolEducation/SchoolEducation";
import SchoolContact from "./pages/SchoolSheet/SchoolContact/SchoolContact";

// PAGES
const Home = lazy(() => import("./pages/Home/Home"));
const Login = lazy(() => import("./pages/Login/Login"));
const Unauthorized = lazy(() => import("./pages/Unauthorized/Unauthorized"));
const NotFound = lazy(() => import("./pages/404/NotFound"));
const SignUp = lazy(() => import("./pages/SignUp/SignUp"));
const Search = lazy(() => import("./pages/Search/Search"));
const Profile = lazy(() => import("./pages/Profile/Profile"));
const SchoolSheet = lazy(() => import("./pages/SchoolSheet/SchoolSheet"));
//COMPONENTS
const Menu = lazy(() => import("./components/Menu/Menu"));
const Loader = lazy(() => import("./components/Loader/Loader"));
const ProtectedRoute = lazy(() => import("./components/Auth/ProtectedRoute"));

function App() {
  return (
    <div>
      <Providers>
        <>
          <Menu />
          <Suspense fallback={<Loader size="large" />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/unauthorized" element={<Unauthorized />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/search" element={<Search />} />
              <Route path="/school" element={<SchoolSheet />}>
                <Route path="" element={<Navigate to="/school/overview" />} />
                <Route path="overview" element={<SchoolOverview />} />
                <Route path="notice" element={<SchoolNotice />} />
                <Route path="education" element={<SchoolEducation />} />
                <Route path="contact" element={<SchoolContact />} />
              </Route>
              <Route element={<ProtectedRoute allowedRoles={[ROLES.USER]} />}>
                <Route path="/profile" element={<Profile />} />
              </Route>

              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
          <ToastContainer
            position="top-right"
            autoClose={4000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </>
      </Providers>
    </div>
  );
}

export default App;

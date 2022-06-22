import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Providers from "./contexts/Providers";

// PAGES
const Home = lazy(() => import("./pages/Home/Home"));
const Login = lazy(() => import("./pages/Login/Login"));
const NotFound = lazy(() => import("./pages/404/NotFound"));
const SignUp = lazy(() => import("./pages/SignUp/SignUp"));
//COMPONENTS
const Menu = lazy(() => import("./components/Menu/Menu"));
const Loader = lazy(() => import("./components/Loader/Loader"));

function App() {
  return (
    <div className="App">
      <Providers>
        <>
          <Menu />
          <Suspense fallback={<Loader size="large" />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </>
      </Providers>
    </div>
  );
}

export default App;

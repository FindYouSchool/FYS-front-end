import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Providers from "./contexts/Providers";

// PAGES
const Home = React.lazy(() => import("./pages/Home/Home"));
const Login = React.lazy(() => import("./pages/Login/Login"));
const NotFound = React.lazy(() => import("./pages/404/NotFound"));
const SignUp = React.lazy(() => import("./pages/SignUp/SignUp"));
//COMPONENTS
const Menu = React.lazy(() => import("./components/Menu/Menu"));
const Loader = React.lazy(() => import("./components/Loader/Loader"));

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

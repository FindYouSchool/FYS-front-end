import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Providers from "./contexts/Providers";

// PAGES
const Home = React.lazy(() => import("./pages/Home/Home"));
const Login = React.lazy(() => import("./pages/Login/Login"));
const NotFound = React.lazy(() => import("./pages/404/NotFound"));
//COMPONENTS
const Menu = React.lazy(() => import("./components/Menu/Menu"));
const Loader = React.lazy(() => import("./components/Loader/Loader"));

function App() {
  return (
    <div className="App">
      <Providers>
        <Menu />
        <div className="container">
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Login" element={<Login />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </div>
      </Providers>
    </div>
  );
}

export default App;

import { lazy, Suspense } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import { Layout } from "@norma/core";
import DevelopmentTag from "../components/DevelopmentTag";

const Home = lazy(() => import("../pages/Home"));
const PageA = lazy(() => import("../pages/PageA"));
const PageB = lazy(() => import("../pages/PageB"));
const PageC = lazy(() => import("../pages/PageC"));

const RemoteRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route
      path="page-a"
      element={
        <Suspense fallback={<div>Loading...</div>}>
          <PageA />
        </Suspense>
      }
    />
    <Route
      path="page-b"
      element={
        <Suspense fallback={<div>Loading...</div>}>
          <PageB />
        </Suspense>
      }
    />
    <Route
      path="page-c"
      element={
        <Suspense fallback={<div>Loading...</div>}>
          <PageC />
        </Suspense>
      }
    />

    <Route path="*" element={<div>404 - NOT FOUND</div>} />
  </Routes>
);

function Router({ idModule = "none" }) {
  const isProd = process.env.NODE_ENV === "production";

  if (isProd) {
    return <RemoteRoutes />;
  }

  return (
    <>
      <BrowserRouter>
        <Layout>
          <RemoteRoutes />
        </Layout>
      </BrowserRouter>
      <DevelopmentTag position="bottomLeft">dev: {idModule}</DevelopmentTag>
    </>
  );
}

export default Router;

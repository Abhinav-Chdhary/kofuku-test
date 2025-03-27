import React, { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import Router from "./Routes";

const ComponentOne = lazy(() => import("./components/One"));
const ComponentTwo = lazy(() => import("./components/Two"));

function App() {
  return <div>
    App
    <br />
    <Link to="/one">One</Link>
    <br />
    <Link to="/one">Two</Link>
  </div>;
}

export default App;

import React, { Suspense, lazy } from "react";
import Loader from "./Loader";
const ChildOne = lazy(() => import("./OneChild"));

function First() {
  return <div>First component
    <Suspense fallback={<Loader />}>
      <ChildOne />
    </Suspense>
  </div>;
}

export default First;

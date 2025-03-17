import React from "react";
import { Routes, Route } from "react-router-dom";
import ImagePreviewRow from "../components/ImagePreviewRow";
import HydrocutIFrame from "../components/HydrocutIFrame";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/photography" element={<ImagePreviewRow />} />
      <Route path="/" element={<HydrocutIFrame />} />
    </Routes>
  );
};

export default AppRoutes;

import { Route, Routes } from "react-router-dom";
import HydrocutIFrame from "../components/HydrocutIFrame";
import ImagePreviewRow from "../components/ImagePreviewRow";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/photography" element={<ImagePreviewRow />} />
      <Route path="/" element={<HydrocutIFrame />} />
    </Routes>
  );
};

export default AppRoutes;

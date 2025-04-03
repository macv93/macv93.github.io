import { Route, Routes } from "react-router-dom";
import HydrocutIFrame from "../components/HydrocutIFrame";
import ImagePreviewRow from "../components/ImagePreviewRow";
import Strava from "../components/Strava";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/photography" element={<ImagePreviewRow />} />
      <Route path="/mtb" element={<HydrocutIFrame />} />
      <Route path="/strava" element={<Strava />} />
    </Routes>
  );
};

export default AppRoutes;

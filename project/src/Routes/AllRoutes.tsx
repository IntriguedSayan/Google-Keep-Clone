import React from "react";
import { Route, Routes } from "react-router-dom";
import { Notes } from "../pages/Notes";
import { Archive } from "../pages/Archive";
import { Trash } from "../pages/Trash";
import { Drawer } from "../components/Drawer";

const AllRoutes: React.FC = () => {
  return (
    <Drawer>
      <Routes>
        <Route path="/" element={<Notes />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/bin" element={<Trash />} />
      </Routes>
    </Drawer>
  );
};

export { AllRoutes };

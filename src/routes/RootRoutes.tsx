import React from "react";
import { Routes, Route } from "react-router-dom";
import { NotFoundSection } from "@/components/sections/NotFoundSection";
import Home from "@/pages/Home";

const RootRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFoundSection />} />
    </Routes>
  );
};

export default RootRoutes;

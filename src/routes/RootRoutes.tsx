import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainRoutes from './MainRoutes';
import { NotFoundSection } from '@/components/sections/NotFoundSection';


const RootRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<MainRoutes />} />
            {/* <Route path="/solutions" element={<Solutions />} /> */}
            {/* <Route path="/solutions/:slug" element={<SolutionDetail />} /> */}
            {/* <Route path="/pricing" element={<PricingPage />} /> */}
            {/* <Route path="/auth/*" element={<AuthRoutes />} /> */}
            <Route path="*" element={<NotFoundSection />} />
        </Routes>
    );
};

export default RootRoutes;

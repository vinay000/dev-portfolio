import Home from '@/pages/Home';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

const MainRoutes: React.FC = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
            {/* <Route path="/pricing" element={<PricingPage />} /> */}
        </Routes>
    );
};

export default MainRoutes;

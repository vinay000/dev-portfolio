import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Layout } from "./components/layout";
import RootRoutes from "./routes/RootRoutes";

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <RootRoutes />
      </Layout>
    </Router>
  );
};

export default App;

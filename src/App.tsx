// import './App.css'
// import { Navigation } from '@/components/navigation'
// import { Hero } from '@/components/hero'
// import { Footer } from '@/components/footer'
// import { LogoCloud } from '@/components/logo-cloud'
// import { Features } from '@/components/features'
// import { Integrations } from '@/components/integrations'
// import { Testimonial } from '@/components/testimonial'
// import { Stats } from '@/components/stats'

// function App() {

//   return (
//     <>
//       <Navigation />
//       <Hero />
//       <LogoCloud />
//       <Features />
//       <Integrations />
//       <Testimonial />
//       <Stats />
//       <Footer />
//     </>
//   )
// }

// export default App


import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Layout } from './components/layout';
import RootRoutes from './routes/RootRoutes';

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






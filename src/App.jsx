import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './Home';
import View from './View';
import Contact from './Contact';
import Header from './Header';
import Footer from './Footer';
import View1 from './View1';
import GallaryView from './GallaryView';

const AppLayout = () => {
  const location = useLocation();

  const hideHeaderFooterRoutes = ['/view', '/view1', '/image'];

  const hideHeaderFooter = hideHeaderFooterRoutes.some(route =>
    location.pathname.startsWith(route)
  );

  return (
    <>
      {!hideHeaderFooter && <Header />}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/view/:id' element={<View />} />
        <Route path='/view1/:id' element={<View1 />} />
        <Route path='/image/:id' element={<GallaryView />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>

      {!hideHeaderFooter && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
};

export default App;

import { Routes, Route, HashRouter } from 'react-router-dom';
import App from './App';
import { HomePage } from './pages/HomePage/HomePage';
import { AboutUsPage } from './pages/AboutUs';
import { Contacts } from './pages/Contacts';
import { Pets } from './pages/Pets';

export const Root = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path='about' element={<AboutUsPage />} />
          <Route path='contacts' element={<Contacts />} />
          <Route path='pets' element={<Pets />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

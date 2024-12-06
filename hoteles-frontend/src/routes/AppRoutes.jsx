import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HotelesDecameron from '../pages/HotelesDecameron';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HotelesDecameron />}>
          <Route path="hoteles" element={<HotelesDecameron />} />
          <Route path="tipos-habitacion" element={<HotelesDecameron />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRoutes;

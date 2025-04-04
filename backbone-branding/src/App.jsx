import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout.jsx';
import Home from './pages/Home.jsx';
import Works from './pages/Works.jsx';
import Services from './pages/Services.jsx';
import Awards from './pages/Awards.jsx';
import Press from './pages/Press.jsx';
import Contact from './pages/Contact.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path="/works" element={<Works/>} />
          <Route path="/services" element={<Services />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/press" element={<Press />} />
          <Route path="/contact" element={<Contact />} />

        </Route>
      </Routes>
    </Router>
  );
}

export default App;

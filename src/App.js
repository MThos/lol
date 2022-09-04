import './css/core/core.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/core/Header';
import Footer from './components/core/Footer';
import Champions from './components/core/Champions';
import Champion from './components/champion/Champion';
import Items from './components/core/Items';
import Item from './components/item/Item';
import Patch from './components/core/Patch';
import Terms from './components/core/Terms';
import Privacy from './components/core/Privacy';
import Cookies from './components/core/Cookies';
import Contact from './components/core/Contact';
import NotFound from './components/core/NotFound';

const App = () => {
  return (
    <main className="App">
    <Patch />
    <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Champions />} />
          <Route path="/champions" element={<Champions />} />
          <Route path="/champion/*" element={<Champion />} />
          <Route path="/items" element={<Items />} />
          <Route path="/item/*" element={<Item />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </main>
  );
}

export default App;

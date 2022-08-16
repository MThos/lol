import './css/core/core.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/core/Header';
import Footer from './components/core/Footer';
import Champions from './components/core/Champions';
import Champion from './components/champion/Champion';
import Patch from './components/core/Patch';

const App = () => {
  return (
    <main className="App">
      <BrowserRouter>
        <Patch />
        <Header />
        <Routes>
          <Route path="/" element={<Champions />} />
          <Route path="/champions" element={<Champions />} />          
          <Route path="/champion/*" element={<Champion />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  );
}

export default App;

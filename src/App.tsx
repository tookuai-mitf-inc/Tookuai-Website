import { Routes, Route } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Home from '@/pages/Home';
import Ride from '@/pages/Ride';
import Partners from '@/pages/Partners';
import Drivers from '@/pages/Drivers';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow px-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ride" element={<Ride />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/drivers" element={<Drivers />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';
// import DrinkGenerator from './pages/DrinkGenerator';
// import WhoPays from './pages/WhoPays';
// import NeverHaveIEverPage from './pages/NeverHaveIEver';
// import TruthOrDrinkPage from './pages/TruthOrDrink';
// import DrunkJengaPage from './pages/DrunkJenga';
// import HangoverTales from './pages/HangoverTales';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import './index.css'; 


// export default function App() {
//   return (
//     <Router>
//         <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/drink-generator" element={<DrinkGenerator />} />
//         <Route path="/who-pays" element={<WhoPays />} />
//         <Route path="/never-have-i-ever" element={<NeverHaveIEverPage />} />
//         <Route path="/truth-or-drink" element={<TruthOrDrinkPage />} />
//         <Route path="/drunk-jenga" element={<DrunkJengaPage />} />
//         <Route path="/hangover-tales" element={<HangoverTales />} />
//       </Routes>
//       <Footer />
//     </Router>
//   );
// }


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DrinkGenerator from './pages/DrinkGenerator';
import WhoPays from './pages/WhoPays';
import NeverHaveIEverPage from './pages/NeverHaveIEver';
import TruthOrDrinkPage from './pages/TruthOrDrink';
import DrunkJengaPage from './pages/DrunkJenga';
import HangoverTales from './pages/HangoverTales';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './index.css'; 

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        <Navbar />
        {/* Ensures the main content grows to push the footer down */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/drink-generator" element={<DrinkGenerator />} />
            <Route path="/who-pays" element={<WhoPays />} />
            <Route path="/never-have-i-ever" element={<NeverHaveIEverPage />} />
            <Route path="/truth-or-drink" element={<TruthOrDrinkPage />} />
            <Route path="/drunk-jenga" element={<DrunkJengaPage />} />
            <Route path="/hangover-tales" element={<HangoverTales />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

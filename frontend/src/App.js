import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Home from "./pages/Home";
import Product from './pages/Product';
function App() {
  return (
    <BrowserRouter>
    <div>
      <header>
        <Link to="/">amazona</Link>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:slug" element={<Product />} />
        </Routes>
        
      </main>
    </div>
    </BrowserRouter>
  );
}

export default App;
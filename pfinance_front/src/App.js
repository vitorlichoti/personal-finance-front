import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
// import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Wallet from "./pages/Wallet";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Wallet /> } />
        <Route path="*" element={ <NotFound />} />
      </Routes>
    </BrowserRouter>    
  );
}

export default App;

import './App.css';
import Card from './Card';
import Sent from './Sent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <BrowserRouter basename='/anonymous-message'>
      <Routes>
          <Route index element={<Card />} />
          <Route path="sent" element={<Sent />} />
          {/* <Route path="*" element={<Card />} /> */}
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

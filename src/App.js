import Giphy from "./components/Giphy";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GifInfo from "./components/GifInfo";

function App() {
return (
    <div className="bg-black min-h-screen">
      <Router>
      <Routes>
        <Route path="/" element={<Giphy />} />
        <Route path="/gifInfo/:id" element={<GifInfo />} />
      </Routes>
    </Router>
      {/* <Giphy /> */}
    </div>
  );
}

export default App;

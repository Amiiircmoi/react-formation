import Trending from "./pages/Trending";
import SearchMovie from "./pages/SearchMovie";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Trending />} />
          <Route path="/search" element={<SearchMovie />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import Trending from "./pages/Trending";
import SearchMovie from "./pages/SearchMovie";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ClassComponenent from "./pages/ClassComponent";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Trending />} />
          <Route path="/search" element={<SearchMovie />} />
          <Route path="/class_component" element={<ClassComponenent />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

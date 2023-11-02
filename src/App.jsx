import Trending from "./pages/Trending";
import SearchMovie from "./pages/SearchMovie";
import MovieEditor from "./pages/MovieEditor";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ClassComponenent from "./pages/ClassComponent";
import { Provider } from "react-redux";
import store from "./redux/store";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Provider store={store}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Trending />} />
            <Route path="/search" element={<SearchMovie />} />
            <Route path="/class_component" element={<ClassComponenent />} />
            <Route path="/movie_editor" element={<MovieEditor />} />
          </Routes>
        </Provider>
      </Router>
    </div>
  );
}

export default App;

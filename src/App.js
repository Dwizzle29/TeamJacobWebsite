import Navbar from "./components/navbar.jsx";
import Home from "./Pages/home.jsx";
import About from "./Pages/aboutUs.jsx";
import News from "./Pages/news.jsx";
import Rosters from "./Pages/rosters.jsx";
import NotFound from "./Pages/pageNotFound.jsx";
import Footer from "./components/footer.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          {/* Routing to different pages*/}
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/news" element={<News />}></Route>
          <Route path="/rosters" element={<Rosters />}></Route>
          <Route path="/notFound" element={<NotFound />}></Route>
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;

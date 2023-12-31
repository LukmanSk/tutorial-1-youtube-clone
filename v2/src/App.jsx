import { AppContext } from "./context/contextApi";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Feed from "./components/Feed";
import SearchResult from "../../v1/src/components/SearchResult";
import VideoDetails from "./components/VideoDetails";
const App = () => {
  return (
    <AppContext>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/searchResult/:searchQuery" element={<SearchResult />} />
          <Route path="/video/:id" element={<VideoDetails />} />
        </Routes>
      </BrowserRouter>
    </AppContext>
  );
};

export default App;

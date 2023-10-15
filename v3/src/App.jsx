import SearchResult from "../../v1/src/components/SearchResult";
import Feed from "./components/Feed";
import Header from "./components/Header";
import VideoDetails from "./components/VideoDetails";
import { AppContext } from "./context/contextApi";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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

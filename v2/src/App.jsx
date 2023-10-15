import { AppContext } from "./context/contextApi";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Feed from "./components/Feed";
const App = () => {
  return (
    <AppContext>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Feed />} />
        </Routes>
      </BrowserRouter>
    </AppContext>
  );
};

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import TopBar from "./component/TopBar";
import Manage from "./component/Manage";

function App() {
  return (
    <>
      <TopBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Manage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

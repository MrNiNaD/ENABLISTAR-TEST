import { BrowserRouter, Route, Routes } from "react-router-dom";
import TopBar from "./component/TopBar";
import Manage from "./component/Manage";
import Add from "./component/Add";

function App() {
  const config = [
    { id: 1, path: "/", element: <Manage /> },
    { id: 2, path: "/add", element: <Add /> },
    { id: 3, path: "/edit/:id", element: <Add /> },
    { id: 4, path: "/view/:id", element: <Add /> },
  ];

  return (
    <BrowserRouter>
      <TopBar />
      <Routes>
        {config.map((eachConfig) => {
          return (
            <Route
              key={eachConfig.id}
              path={eachConfig?.path}
              element={eachConfig?.element}
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

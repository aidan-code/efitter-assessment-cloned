import Sidebar from "./resources/Sidebar";
import "./styles.css";
import { Routes, Route } from "react-router-dom";
import New from "./component/New";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Test from "./resources/test";
import Results from "./component/Results";
import Dashboard from "./component/Dashboard";
import Design from "./component/Design";
import Specifics from "./component/specs";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Dashboard />}>
          <Route path="/" element={<Results />} />
          <Route path="/design" element={<Design />}>
            <Route exact path="/design/" element={<Specifics />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

// const router = createBrowserRouter([{ path: "*", Component: Root }]);

// export default function App() {
//   return <RouterProvider router={router} />;
// }

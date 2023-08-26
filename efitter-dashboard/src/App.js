import Sidebar from "./resources/Sidebar";
import "./styles.css";
import { Routes, Route } from "react-router-dom";
import New from "./component/New";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Test from "./resources/test";
import Results from "./component/Results";
import Dashboard from "./component/Dashboard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Dashboard />}>
          <Route path="/result" element={<Results />} />
        </Route>
        {/* <Route path="/test" element={<Test />} /> */}
      </Routes>
    </div>
  );
}

export default App;

// const router = createBrowserRouter([{ path: "*", Component: Root }]);

// export default function App() {
//   return <RouterProvider router={router} />;
// }

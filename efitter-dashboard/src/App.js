import Sidebar from "./resources/Sidebar";
import "./styles.css";
import { Routes, Route } from "react-router-dom";
import New from "./component/New";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Test from "./resources/test";
import Results from "./component/Results";


const Root = () => {
  return (
    <Routes>
      <Route path="/" element={<New />} >
        <Route path="result" element={<Results />} />
       </Route>
      <Route path="/test" element={<Test />} />
    </Routes>
  );
};

const router = createBrowserRouter([{ path: "*", Component: Root }]);

export default function App() {
  return <RouterProvider router={router} />;
}

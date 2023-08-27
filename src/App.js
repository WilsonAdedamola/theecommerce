import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Jewelry from "./pages/Jewelry";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Electronics from "./pages/Electronics";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Cart from "./components/Cart";

const AppLayout = () => (
  <>
    <Header />
    <Cart />
    <Outlet />
  </>
);
function App() {
  return (
    <div className="mx-auto">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "men",
        element: <Men />,
      },
      {
        path: "women",
        element: <Women />,
      },
      {
        path: "jewelry",
        element: <Jewelry />,
      },
      {
        path: "electronics",
        element: <Electronics />,
      },
    ],
  },
]);

export default App;

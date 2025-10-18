import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "./components/Layout/AppLayout.jsx";
import { Home } from "./pages/Home.jsx";
import { About } from "./pages/About.jsx";
import { Search } from "./pages/Search.jsx";  
import { Contact } from "./pages/Contact.jsx";
import { ErrorPage } from "./pages/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "search", 
        element: <Search />
      },
      {
        path: "contact",
        element: <Contact />
      },
    ]
  }
]);

const App = () =>{
  return <RouterProvider router={router} />;
}

export default App;
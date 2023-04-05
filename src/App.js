import './App.css';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import NavBar from './CommonContainers/NavBar';
import Footer from './CommonContainers/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';

import { routesAndElements } from './Routes/Routes';


function App() {
  return (
    <>

      <NavBar />
      <RouterProvider router={createBrowserRouter(routesAndElements)} />
      <Footer />

    </>
  );
}

export default App;

import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import RootLayout from './components/Root';
import HomePage from "./pages/Home";
import ProductsPage from './pages/Products';


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {path: '/' , element: <HomePage />},
      {path: '/products', element: <ProductsPage />}
    ]
  },
  
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

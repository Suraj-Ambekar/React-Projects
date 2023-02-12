import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import RootLayout from './components/Root';
import ErrorPage from './pages/Error';
import HomePage from "./pages/Home";
import ProductDetailPage from './pages/ProductDetail';
import ProductsPage from './pages/Products';


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {path: '/' , element: <HomePage />},
      {path: '/products', element: <ProductsPage />},
      {path: '/products/:productId', element: <ProductDetailPage />}
    ]
  },
  
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

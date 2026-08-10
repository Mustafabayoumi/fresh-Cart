import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import About from './components/About/About';
import Categories from './components/Categories/Categories';
import CategoryDetails from './components/CategoryDetails/CategoryDetails';
import Brands from './components/Brands/Brands';
import Cart from './components/Cart/Cart';
import Products from './components/Products/Products';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Notfound from './components/Notfound/Notfound';
import CounterContextProvider from './Context/CounterContext';
import UserContextProvider from './Context/UserContext';
import ProtectedRoute from './components/protectedRoute/protectedRoute';
import ProdutDetails from './components/produtDetails/produtDetails';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import CartContextProvider from './Context/CartContext';
import BrandDetails from './components/BrandDetails/BrandDetails';
import { Toaster } from 'react-hot-toast';
import CheckOut from './components/CheckOut/CheckOut';
import Orders from './components/Orders/Orders';


let query = new QueryClient();
let router = createBrowserRouter([
      { path: "/",element: <Layout />,children:[
      { index: true, element: <ProtectedRoute><Home /></ProtectedRoute> },
      { path: "About", element: <ProtectedRoute><About /></ProtectedRoute> },
      { path: "Categories", element: <ProtectedRoute><Categories /></ProtectedRoute> },
      { path: "CategoryDetails/:id", element: <ProtectedRoute><CategoryDetails /></ProtectedRoute> },
      { path: "Brands", element: <ProtectedRoute><Brands /></ProtectedRoute> },
      { path: "BrandDetails/:id", element: <ProtectedRoute><BrandDetails /></ProtectedRoute> },
      { path: "Cart", element: <ProtectedRoute><Cart /></ProtectedRoute> },
      { path: "Products", element: <ProtectedRoute><Products/></ProtectedRoute>},
      { path: "ProdutDetails/:id/:category", element: <ProtectedRoute><ProdutDetails /></ProtectedRoute> },
      { path: "Checkout", element: <ProtectedRoute><CheckOut/></ProtectedRoute> },
      { path: "AllOrders", element: <ProtectedRoute><Orders/></ProtectedRoute> },
      { path: "Login", element: <Login /> },
      { path: "Register", element: <Register /> },
      { path: "*", element: <Notfound /> },
    ]
  }
]);

function App() {
  return (
    <>
      <QueryClientProvider client={query}>
        <UserContextProvider>
          <CounterContextProvider>
            <CartContextProvider>
              <RouterProvider router={router}></RouterProvider >
              <ReactQueryDevtools initialIsOpen={false} />
              <Toaster/>
            </CartContextProvider>
          </CounterContextProvider>
        </UserContextProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;

import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import Home from '../pages/Home';
import Login from '../pages/Login';


export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <h4>Error</h4>,
    children: [
      {
        path: '/',
        element: <Home/>
      }
    ]
  },
  {
    path: '/login',
    element: <Login/>
  }
]);

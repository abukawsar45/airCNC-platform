import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Signup from './../pages/Signup';
import PrivateRoute from './PrivateRoute';
import RoomDetails from '../pages/RoomDetails';
import DashboardLayout from '../layouts/DashboardLayout';
import AddRoom from '../pages/AddRoom';
import { getRoom } from '../api/rooms';
import MyBookings from '../components/Dashboard/MyBookings';
import MyListings from '../components/Dashboard/MyListings';


export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <h4>Error</h4>,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'room/:id',
        element: (
          <PrivateRoute>
            <RoomDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) => getRoom(params.id),
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '/dashboard',
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: '',
        element: <MyBookings />,
      },
      {
        path: 'add-room',
        element: <AddRoom />,
      },
      {
        path: 'my-bookings',
        element: <MyBookings />,
      },
      {
        path: 'my-listings',
        element: <MyListings />,
      },
    ],
  },
]);

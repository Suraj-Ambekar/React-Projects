import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Root from './components/Root'
import HomePage from './pages/HomePage';
import EventsPage from './pages/EventsPage';
import EventDetailPage from './pages/EventDetailPage';
import NewEventPage from './pages/NewEventPage';
import EditEventPage from './pages/EditEventPage';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {path: '/', element: <HomePage />},
      {path: '/events', element: <EventsPage />},
      {path: '/events/:eventId', element: <EventDetailPage />},
      {path: '/events/new', element: <NewEventPage />},
      {path: '/events/:eventId/edit', element: <EditEventPage />},
    ]
  },
  
]);

function App() {
  return <RouterProvider router={router}/>;
}

export default App;

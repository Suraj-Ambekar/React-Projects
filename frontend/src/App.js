import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Root from './components/Root'
import HomePage from './pages/HomePage';
import EventsPage, {loader as eventsLoader} from './pages/EventsPage';
import EventDetailPage from './pages/EventDetailPage';
import NewEventPage from './pages/NewEventPage';
import EditEventPage from './pages/EditEventPage';
import EventsRootLayout from './pages/EventRootLayout';
import ErrorPage from './pages/ErrorPage';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {index:true, element: <HomePage />},
      {path: 'events', element: <EventsRootLayout />, children: [
        {index: true, element: <EventsPage />, loader: eventsLoader},
        {path: ':eventId', element: <EventDetailPage />},
        {path: 'new', element: <NewEventPage />},
        {path: ':eventId/edit', element: <EditEventPage />},
      ]},
      
    ]
  },
  
]);

function App() {
  return <RouterProvider router={router}/>;
}

export default App;

import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Root from './components/Root'
import HomePage from './pages/HomePage';
import EventsPage from './pages/EventsPage';
import EventDetailPage from './pages/EventDetailPage';
import NewEventPage from './pages/NewEventPage';
import EditEventPage from './pages/EditEventPage';
import EventsRootLayout from './pages/EventRootLayout';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {index:true, element: <HomePage />},
      {path: 'events', element: <EventsRootLayout />, children: [
        {index: true, element: <EventsPage />},
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

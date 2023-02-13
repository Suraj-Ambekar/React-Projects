import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Root from './components/Root'
import HomePage from './pages/HomePage';
import EventsPage, {loader as eventsLoader} from './pages/EventsPage';
import EventDetailPage, {loader as eventDetailLoader, action as deleteEventAction} from './pages/EventDetailPage';
import NewEventPage from './pages/NewEventPage';
import EditEventPage from './pages/EditEventPage';
import EventsRootLayout from './pages/EventRootLayout';
import ErrorPage from './pages/ErrorPage';
import {action as manipulateEventAction} from './components/EventForm';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {index:true, element: <HomePage />},
      {path: 'events', element: <EventsRootLayout />, children: [
        {index: true, element: <EventsPage />, loader: eventsLoader},
        {
          path: ':eventId',
          id: 'event-detail',
          loader: eventDetailLoader,
          children: [
            {index: true, element: <EventDetailPage />, action: deleteEventAction},
            {path: 'edit', element: <EditEventPage />, action: manipulateEventAction},
          ]
        },        
        {path: 'new', element: <NewEventPage />, action: manipulateEventAction },
      ]},
      
    ]
  },
  
]);

function App() {
  return <RouterProvider router={router}/>;
}

export default App;

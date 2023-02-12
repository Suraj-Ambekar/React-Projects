import React from 'react';
import { useParams } from 'react-router-dom';

const EventDetailPage = () => {

  const params = useParams();
  return (
    <>
        <h1>Products details page.</h1>
        <p>{params.eventId}</p>
    </>
  )
}

export default EventDetailPage
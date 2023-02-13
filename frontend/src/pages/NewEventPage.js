import React from 'react'
import EventForm from '../components/EventForm'
import { json, redirect } from 'react-router-dom'

const NewEventPage = () => {
  return (
    <EventForm />
  )
}

export default NewEventPage;


export async function action({request, params}) {
  const data = await request.formData();

  const eventData = {
    title: data.get('title'),
    image: data.get('image'),
    date: data.get('date'),
    description: data.get('description'),
  };

  const response = fetch('http://localhost:8080/events', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // 'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify(eventData),
  })

  if(!response.ok){
    throw json({message: 'Could not save event'})
  }

  return redirect('/events');
}
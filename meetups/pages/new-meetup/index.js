// import React from 'react'
import NewMeetupForm from "@/components/meetups/NewMeetupForm"
import { useRouter } from "next/router";

const NewMeetupPage = () => {

  const router = useRouter();

    async function addMeetupHandler(enteredMeetupData){
        // console.log(enteredMeetupData);
      const response = await fetch('/api/new-meetup', {
        method: 'POST',
        body: JSON.stringify(enteredMeetupData),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const data = response.json();
      console.log(data);

      router.push('/');
    }
  return (
    <NewMeetupForm  onAddMeetup={addMeetupHandler}/>
  )
}

export default NewMeetupPage
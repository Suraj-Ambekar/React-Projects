// import React from 'react'
import NewMeetupForm from "@/components/meetups/NewMeetupForm"
import { useRouter } from "next/router";
import { Fragment } from "react";
import Head from "next/head";

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

    <Fragment>
        <Head>
            <title>Add a new meetup</title>
            <meta 
                name="description"
                content="Add your own meetups and create amzing networking opportunities."
            />
        </Head>
        <NewMeetupForm  onAddMeetup={addMeetupHandler}/>
    </Fragment>

    
  )
}

export default NewMeetupPage
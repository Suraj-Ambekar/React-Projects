import MeetupDetail from '@/components/meetups/MeetupDetail'
import React, { Fragment } from 'react'

const MeetupDetails = () => {
  return (
    < MeetupDetail
        image= 'https://www.infront.com/wp-content/uploads/2015/08/meet-up.png.webp'
        title= 'A first meetup'
        address= 'lakjdf laksome ojdl aofsl'
        description= 'lkdjf'
    />
  )
}

export async function getStaticPaths(){
    return {
        fallback: false,
        paths: [
            {
                params: {
                    meetupid : 'm1'
                }
            },
            {
                params: {
                    meetupid: 'm2'
                }
            },
        ],
    }
}

export async function getStaticProps(context){

    const meetupId = context.params.meetupid;

    console.log(meetupId);


    return {
        props: {
            meetupData: {
                image: 'https://www.infront.com/wp-content/uploads/2015/08/meet-up.png.webp',
                id: meetupId,
                title: 'A first meetup',
                address: 'lakjdf laksome ojdl aofsl',
                description: 'lkdjf',
            }
        }
    }
}

export default MeetupDetails
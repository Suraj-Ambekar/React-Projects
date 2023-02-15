import MeetupDetail from '@/components/meetups/MeetupDetail'
import React, { Fragment } from 'react';
import { MongoClient , ObjectId} from 'mongodb';
import Head from 'next/head';

const MeetupDetails = (props) => {
  return (
    <Fragment>
        <Head>
            <title>{props.meetupData.title}</title>
            <meta 
                name="description"
                content={props.meetupData.description}
            />
        </Head>
        < MeetupDetail
            image= {props.meetupData.image}
            title= {props.meetupData.title}
            address= {props.meetupData.address}
            description= {props.meetupData.description}
        />
    </Fragment>
    
  )
}

export async function getStaticPaths(){
    const client = await MongoClient.connect('mongodb+srv://suraj:eDoY7gps1LAgnb7b@cluster0.rhe8dgl.mongodb.net/meetups?retryWrites=true&w=majority');
    const db = client.db();

    const meetupCollection = db.collection('meetups');

    const meetups = await meetupCollection.find({}, {_id: 1}).toArray();

    client.close();


    return {
        fallback: 'blocking',
        paths: meetups.map(meetup => ({
            params: {meetupid: meetup._id.toString()},
        })),
    }
}

export async function getStaticProps(context){

    const meetupId = context.params.meetupid;

    const client = await MongoClient.connect('mongodb+srv://suraj:eDoY7gps1LAgnb7b@cluster0.rhe8dgl.mongodb.net/meetups?retryWrites=true&w=majority');
    const db = client.db();

    const meetupCollection = db.collection('meetups');

    const meetups = await meetupCollection.find({}, {_id: 1}).toArray();

    const selectedMeetup = await meetupCollection.findOne({_id: new ObjectId(meetupId),
    });

    client.close();


    return {
        props: {
            meetupData: {
                id: selectedMeetup._id.toString(),
                title: selectedMeetup.title,
                address: selectedMeetup.address,
                image: selectedMeetup.image,
                description: selectedMeetup.description,
            }
        },
    };
}

export default MeetupDetails
import { MongoClient } from "mongodb";
import MeetupList from "@/components/meetups/MeetupList";
import Head from "next/head";
import { Fragment } from "react";

// const DUMMY_MEETUPS = [
//     {
//         id: 'm1',
//         title: 'A first meetup',
//         image: 'https://www.infront.com/wp-content/uploads/2015/08/meet-up.png.webp',
//         address: "som sdlkjflajpe djfoiae 8",
//         description: 'lkjoi place good.'
//     },
//     {
//         id: 'm2',
//         title: 'A second meetup',
//         image: 'https://www.infront.com/wp-content/uploads/2015/08/meet-up.png.webp',
//         address: "som sdlkjflajpe djfoiae 8",
//         description: 'lkjoi place good.',
//     }
// ];

const HomePage = (props) => {
  return (
    <Fragment>
        <Head>
            <title>Next.js Meetup</title>
            <meta 
                name="description"
                content="Browse a huge list of highly active Next.js meetups!"
            />
        </Head>
        <MeetupList meetups={props.meetups} />
    </Fragment>
        

  )
}

// export async function getServerSideProps(context){
//     const req= context.req;
//     const res = context.res;

//     // fetch data from an API
//     return {
//         props: {
//             meetups: DUMMY_MEETUPS
//         }
//     }
// }

export async function getStaticProps() {

    // fetch data from an API


    const client = await MongoClient.connect('mongodb+srv://suraj:eDoY7gps1LAgnb7b@cluster0.rhe8dgl.mongodb.net/meetups?retryWrites=true&w=majority');
    const db = client.db();

    const meetupCollection = db.collection('meetups');

    const meetup = await meetupCollection.find().toArray();


    client.close();

    const con = meetup.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
    }));
        
    return {
        props: {
            meetups: con,
        },
        revalidate: 1
    }
}

export default HomePage
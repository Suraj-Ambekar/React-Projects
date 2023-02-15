
import MeetupList from "@/components/meetups/MeetupList"

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'A first meetup',
        image: 'https://www.infront.com/wp-content/uploads/2015/08/meet-up.png.webp',
        address: "som sdlkjflajpe djfoiae 8",
        description: 'lkjoi place good.'
    },
    {
        id: 'm2',
        title: 'A second meetup',
        image: 'https://www.infront.com/wp-content/uploads/2015/08/meet-up.png.webp',
        address: "som sdlkjflajpe djfoiae 8",
        description: 'lkjoi place good.',
    }
];

const HomePage = (props) => {
  return (
        <MeetupList meetups={props.meetups} />

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
    return {
        props: {
            meetups: DUMMY_MEETUPS
        },
        revalidate: 1
    }
}

export default HomePage
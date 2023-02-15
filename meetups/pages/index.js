import Layout from "@/components/layout/Layout";
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

const HomePage = () => {
  return (
    <Layout>
        <MeetupList meetups={DUMMY_MEETUPS} />
    </Layout>
  )
}

export default HomePage
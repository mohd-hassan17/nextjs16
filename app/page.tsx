import EventCard from "@/components/EventCard";
import ExploreBtn from "@/components/ExploreBtn";
import events from "@/lib/actions/constants";
import Image from "next/image";




export default function Home() {
  return (
    
    <section className="">

       <h1 className="text-center">The Hub for Every Dev <br /> Event You Can't Miss</h1>
            <p className="text-center mt-5 text-white">Hackathons, Meetups, and Conferences, All in One Place</p>

        <ExploreBtn />

        <ul className="text-white events">
          
        {events.map((event) => (
            <li key={event.slug}>
                <EventCard {...event} />
            </li>
        ))}
        </ul>

    </section>

  );
}

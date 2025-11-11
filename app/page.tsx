import EventCard from "@/components/EventCard";
import ExploreBtn from "@/components/ExploreBtn";
import events from "@/lib/constants";
import { IEvent } from "@/models";
import { cacheLife } from "next/cache";
import Image from "next/image";



const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export default async function Home() {
    'use cache'
    cacheLife('minutes');
    const response = await fetch(`${BASE_URL}/api/events`);
    const { events } = await response.json();


  return (
    
    <section className="">

       <h1 className="text-center">The Hub for Every Dev <br /> Event You Can't Miss</h1>
            <p className="text-center mt-5 text-white">Hackathons, Meetups, and Conferences, All in One Place</p>

        <ExploreBtn />

      <ul className="events mt-10">
                    {events && events.length > 0 && events.map((event: IEvent) => (
                        <li key={event.title} className="list-none">
                            <EventCard {...event} />
                        </li>
                    ))}
                </ul>

    </section>

  );
}

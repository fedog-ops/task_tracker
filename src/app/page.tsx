import Link from "next/link";
import { ticketsPath } from "../paths";
import Heading from "../components/heading";

const HomePage = () => {
  return (
    <div className="flex-1 flex flex-col gap-y-8">
      <Heading title="Home" description="Welcome to the Home Page" />
      <Link href={ticketsPath()} className="underline">Go to Tickets</Link>
    </div>
  );
}

export default HomePage;
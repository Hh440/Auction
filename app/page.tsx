import Image from "next/image";
import { RecentAuctions } from "./Components/RecentAuctions";
import { ShowCards } from "./Components/ShowCards";

export default function Home() {
  return (
    <div className="space-y-8">
      <img
        className="h-screen w-full"
        src="https://thumbor1.astaguru.com/unsafe/1370x0/filters:format(webp)/https://cms-assets.astaguru.com/upload/10232024_095144_oct-24-je-home.jpg"
        alt=""
      />
      <div className="space-y-4 px-16">
        <h1>Auctions On The Way</h1>
        <div className="grid grid-cols-12">
          <div className="col-span-4 bg-red-400">
            HEy man
          </div>
          <div className="col-span-8 bg-blue-400">
            <div className="flex space-x-8">
                <ShowCards/>
                <ShowCards/>
                <ShowCards/>
            </div>
          </div>
        </div>
      </div>

      <RecentAuctions/>
    </div>
  );
}

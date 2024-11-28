import Image from "next/image";
import { RecentAuctions } from "./Components/RecentAuctions";
import { ShowCards } from "./Components/ShowCards";
import { HomeAuction } from "./Components/HomeAuction";

export default function Home() {
  return (
    <div className="space-y-8">
      <img
        className="h-screen w-full object-cover"
        src="https://thumbor1.astaguru.com/unsafe/1370x0/filters:format(webp)/https://cms-assets.astaguru.com/upload/10232024_095144_oct-24-je-home.jpg"
        alt=""
      />
      <HomeAuction/>

      <RecentAuctions />
    </div>
  );
}

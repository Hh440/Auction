import { ShowCards } from "./ShowCards";

export function RecentAuctions(){
    return <div className="space-y-4 ">
        <h1 className="text-2xl">Most Recent Auctions</h1>
        <div className="grid grid-cols-5">
          <ShowCards/>
          <ShowCards/>
          <ShowCards/>
          <ShowCards/>
          <ShowCards/>
        </div>
      </div>
}
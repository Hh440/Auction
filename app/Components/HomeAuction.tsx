import { ShowCards } from "./ShowCards";

export function HomeAuction(){
    return <div className="space-y-4 px-16">
    <h1 className="text-2xl">Auctions On The Way</h1>
    <div className="lg:grid lg:grid-cols-12">
      <div className=" p-4 lg:col-span-4 bg-red-400 text-xl space-y-8">
        <p>
          Over the years, we have curated a wide range of online auctions in
          India, covering a diverse array of categories. Our portfolio
          boasts an impressive collection of Modern Indian Art from famous
          painters, exquisite vintage jewellery, fine silverware, rare
          timepieces, luxurious textiles, coveted celebrity memorabilia,
          rare books, numismatic treasures, philatelic gems, and even
          vintage cars. Take a look at the offerings in our upcoming online
          auctions.
        </p>
        <button className="bg-purple-400 rounded-lg outline">
          All upcoming Auctions
        </button>
      </div>
      <div className="lg:col-span-8 bg-blue-400">
        <div className="flex space-x-8 p-8">
          <ShowCards />
          <ShowCards />
          <ShowCards />
        </div>
      </div>
    </div>
  </div>
}
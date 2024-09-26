import SearchBar from "@/components/ui/SearchBar";
import { Button } from "@/components/ui/button";

export default function Buybike() {
  return (
    <div className="h-screen bg-card flex flex-col items-center ">
      <div className=" mt-10">
        <h1 className="flex justify-center text-3xl font-bold text-primary">
          Let&#39;s Find Your Dream Bike
        </h1>
        <p className="flex justify-center text-gray-400 text-sm">
          We recommend the very used and newest bikes today, and also a friendly
          price for you
        </p>
      </div>
      <div>
        <div className="flex flex-row gap-1 mb-2 mt-12">
          <Button className="text-black font-semibold">New Bike</Button>
          <Button className="text-black font-semibold">Used Bike</Button>
        </div>
        <div>
          <SearchBar />
        </div>
      </div>
    </div>
  );
}

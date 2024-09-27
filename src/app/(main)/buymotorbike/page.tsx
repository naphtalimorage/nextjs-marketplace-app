"use client";
import BikeCard from "@/components/ui/BikeCard";
import SearchBar from "@/components/ui/SearchBar";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

interface Bike {
  id: number;
  bikeName: string;
  cost: number;
  description: string;
}

const mockBikeData: Bike[] = [
  {
    id: 1,
    bikeName: "Honda CBR500R",
    cost: 7500,
    description:
      "A powerful bike with great performance for daily commuting and long-distance travel.",
  },
  {
    id: 2,
    bikeName: "Yamaha MT-07",
    cost: 8000,
    description:
      "A lightweight, agile bike perfect for city riding and weekend adventures.",
  },
  {
    id: 3,
    bikeName: "BMW G 310 R",
    cost: 6200,
    description:
      "An entry-level bike offering BMW’s quality and reliability at an affordable price.",
  },
  {
    id: 4,
    bikeName: "Honda CBR500R",
    cost: 7500,
    description:
      "A powerful bike with great performance for daily commuting and long-distance travel.",
  },
  {
    id: 5,
    bikeName: "Yamaha MT-07",
    cost: 8000,
    description:
      "A lightweight, agile bike perfect for city riding and weekend adventures.",
  },
  {
    id: 6,
    bikeName: "BMW G 310 R",
    cost: 6200,
    description:
      "An entry-level bike offering BMW’s quality and reliability at an affordable price.",
  },
  {
    id: 7,
    bikeName: "Honda CBR500R",
    cost: 7500,
    description:
      "A powerful bike with great performance for daily commuting and long-distance travel.",
  },
  {
    id: 8,
    bikeName: "Yamaha MT-07",
    cost: 8000,
    description:
      "A lightweight, agile bike perfect for city riding and weekend adventures.",
  },
  {
    id: 9,
    bikeName: "BMW G 310 R",
    cost: 6200,
    description:
      "An entry-level bike offering BMW’s quality and reliability at an affordable price.",
  },
  {
    id: 10,
    bikeName: "Honda CBR500R",
    cost: 7500,
    description:
      "A powerful bike with great performance for daily commuting and long-distance travel.",
  },
  {
    id: 11,
    bikeName: "Yamaha MT-07",
    cost: 8000,
    description:
      "A lightweight, agile bike perfect for city riding and weekend adventures.",
  },
  {
    id: 12,
    bikeName: "BMW G 310 R",
    cost: 6200,
    description:
      "An entry-level bike offering BMW’s quality and reliability at an affordable price.",
  },
  {
    id: 13,
    bikeName: "Honda CBR500R",
    cost: 7500,
    description:
      "A powerful bike with great performance for daily commuting and long-distance travel.",
  },
  {
    id: 14,
    bikeName: "Yamaha MT-07",
    cost: 8000,
    description:
      "A lightweight, agile bike perfect for city riding and weekend adventures.",
  },
  {
    id: 15,
    bikeName: "BMW G 310 R",
    cost: 6200,
    description:
      "An entry-level bike offering BMW’s quality and reliability at an affordable price.",
  },
  {
    id: 16,
    bikeName: "Honda CBR500R",
    cost: 7500,
    description:
      "A powerful bike with great performance for daily commuting and long-distance travel.",
  },
  {
    id: 17,
    bikeName: "Yamaha MT-07",
    cost: 8000,
    description:
      "A lightweight, agile bike perfect for city riding and weekend adventures.",
  },
  {
    id: 18,
    bikeName: "BMW G 310 R",
    cost: 6200,
    description:
      "An entry-level bike offering BMW’s quality and reliability at an affordable price.",
  },
  {
    id: 19,
    bikeName: "Honda CBR500R",
    cost: 7500,
    description:
      "A powerful bike with great performance for daily commuting and long-distance travel.",
  },
  {
    id: 20,
    bikeName: "Yamaha MT-07",
    cost: 8000,
    description:
      "A lightweight, agile bike perfect for city riding and weekend adventures.",
  },
  {
    id: 21,
    bikeName: "BMW G 310 R",
    cost: 6200,
    description:
      "An entry-level bike offering BMW’s quality and reliability at an affordable price.",
  },
  {
    id: 22,
    bikeName: "BMW G 310 R",
    cost: 6200,
    description:
      "An entry-level bike offering BMW’s quality and reliability at an affordable price.",
  },
];
export default function Buybike() {
  const [bikes, setBikes] = useState<Bike[]>([]);

  useEffect(() => {
    const FetchBikes = async () => {
      // const response = await fetch();
      // const data = await response.json();
      setBikes(mockBikeData);
    };

    FetchBikes();
  }, []);
  return (
    <div className="h-fit bg-card flex flex-col items-center ">
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
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 mt-10">
          {bikes &&
            bikes.map((bike) => {
              return (
                <div key={bike.id} >
                  <BikeCard
                    bikeName={bike.bikeName}
                    cost={bike.cost}
                    description={bike.description}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";
import Image from "next/image";
import bike from  "../../assets/bike4.jpeg"
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="h-screen bg-black">
      <div className="flex flex-col lg:flex-row gap-11">
        <div className="ml-20 mt-20  w-[400px]">
          <h1 className="text-4xl font-serif font-bold  mb-10 text-primary ">
            The safest way to <Link href="/sellmotorbike" className="text-red-700">sell</Link>
            <br /> and <Link href="/buymotorbike" className="text-red-700">buy</Link> your motorbike{" "}
            <br /> in kenya
          </h1>
          <p className="font-base text-gray-400">
            Welcome to the worlds largest online marketplace for motorcycles,
            where you can buy, sell, and trade your old and new vehicles.
          </p>
          <div className="flex  mt-10 flex-col lg:flex-row gap-5">
            <div>
              <Link href="/buymotorbike">
                <Button className="bg-red-700 hover:bg-red-800 text-white px-8 py-2 rounded-md">
                  Buy Now
                </Button>
              </Link>
            </div>
            <div>
              <Link href="/sellmotorbike">
                <Button className="bg-red-700 hover:bg-red-800 text-white px-8 py-2 rounded-md">
                  Sell Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Image
            src={bike}
            alt="image7"
            width={700}
            height={500}
            priority
            className=""
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

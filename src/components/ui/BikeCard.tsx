import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "./button";

interface BikeProps {
  bikeName: string;
  cost: number | string;
  description: string;
}

export default function BikeCard({ bikeName, cost, description }: BikeProps) {
  return (
    <div className="grid">
      <Card className="w-64 bg-white">
        <CardHeader>
          <img
            src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
            alt="card-image"
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardContent>
          <div className="mb-2 flex items-center justify-between">
            <p>{bikeName}</p>
            <p>{cost}</p>
          </div>
          <CardDescription>{description}</CardDescription>
        </CardContent>
        <CardFooter>
          <Button>Available</Button>
        </CardFooter>
      </Card>
    </div>
  );
}

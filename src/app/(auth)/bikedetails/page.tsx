"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  plateNumber: z.string().min(4, {
    message: "Plate number must be at least 4 characters",
  }),
  color: z.string().min(2, {
    message: "Name of the color must be at least 2 characters long",
  }),
  engineSize: z.number().min(1.0, {
    message: "Engine size must be at least 1.0",
  }),
  fuelConsumption: z.number().min(0.5, {
    message: "Fuel consumption must be at least 0.5",
  }),
  make: z.string().min(2, {
    message: "A motorbike must have a make",
  }),
  fuelType: z.string().min(2, {
    message: "A motorbike must have a fuel type",
  }),
  condition: z.string().min(2, {
    message: "Condition of the motorbike must be at least 2 characters long",
  }),
  price: z.number().min(2, {
    message: "Price must be at least 2",
  }),
  model: z.string().min(2, {
    message: "Model of the motorbike must be at least 2 characters long",
  }),
  manufactureYear: z.string().min(1900, {
    message: "Manufacture year must be a valid year (1900-current year)",
  }),
  mileage: z.string().min(0, {
    message: "Mileage must be at least 0",
  }),
  location: z.string().min(2, {
    message: "Location must be at least 2 characters long",
  }),
  description: z.string().min(5, {
    message: "Description must be at least 5 characters long",
  }),
});

type FormValues = z.infer<typeof formSchema>;

interface MotorbikeInfoFormProps {
  nextStep: () => void;
  setValues: (values: FormValues) => void;
  values: FormValues;
}
export default function MotorbikeInfoForm({
  nextStep,
  setValues,
  values,
}: MotorbikeInfoFormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: values,
  });

  function onSubmit(formValues: FormValues) {
    setValues(formValues);
    nextStep();
  }

  return (
    <div  className="flex justify-center mt-10">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-[500px] shadow-2xl p-5"
        >
          <FormField
            control={form.control}
            name="plateNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Plate Number</FormLabel>
                <FormControl>
                  <Input placeholder="Plate Number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="color"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Color</FormLabel>
                <FormControl>
                  <Input placeholder="Color" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="engineSize"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Engine Size</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="Engine Size" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="fuelConsumption"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Fuel Consumption</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Fuel Consumption (L/100 km)"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="make"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Make</FormLabel>
                <FormControl>
                  <Input placeholder="Make" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="fuelType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Fuel Type</FormLabel>
                <FormControl>
                  <Input placeholder="Fuel Type" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="condition"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Condition</FormLabel>
                <FormControl>
                  <Input placeholder="Condition" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Price</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="Price" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="model"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Model</FormLabel>
                <FormControl>
                  <Input placeholder="Model" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="manufactureYear"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Manufacture Year</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Manufacture Year"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="mileage"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mileage</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="Mileage (km)" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Location</FormLabel>
                <FormControl>
                  <Input placeholder="Location" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Input placeholder="Description" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="bg-card">Next</Button>
        </form>
      </Form>
    </div>
  );
}

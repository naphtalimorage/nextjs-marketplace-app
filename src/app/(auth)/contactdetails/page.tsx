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

const requiredString = z.string().trim().min(1, "Required");

const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  email: requiredString.email("Invalid email address"),
  phoneNumber: requiredString.min(10, {
    message: "Phone number must be at least 10 digits.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

interface ContactProps {
  nextStep: () => void;
  setValues: (values: FormValues) => void;
  values: FormValues;
  prevStep: () => void;
}
export default function PersonalInfoForm({
  nextStep,
  setValues,
  values,
  prevStep,
}: ContactProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: values,
  });

  function onSubmit(formValues: FormValues) {
    setValues(formValues);
    nextStep();
    prevStep();
  }
  return (
    <div>
      <div className="flex justify-center mt-10">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 w-[500px] shadow-2xl p-5"
          >
            <p className="text-xl font-bold">Contact Details</p>
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input placeholder="first name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input placeholder="First Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email </FormLabel>
                  <FormControl>
                    <Input placeholder="Email " {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input placeholder="Phone Number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex flex-row justify-between">
              <Button className="bg-card hover:bg-black">Previous</Button>
              <Button className="bg-card hover:bg-black">Next</Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}

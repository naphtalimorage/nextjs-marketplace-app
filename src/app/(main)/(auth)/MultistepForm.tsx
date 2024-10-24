import { useState } from "react";
import MotorbikeInfoForm from "./bikedetails/page";
import PersonalInfoForm from "./contactdetails/page";

export default function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    plateNumber: "",
    manuctureYear: "",
    make: "",
    model: "",
    engineSize: "",
    fuelType: "",
    fuelConsumption: "",
    price: "",
    location: "",
    color: "",
    condition: "",
    mileage: "",
    description: "",
  });

  const prevStep = () => setCurrentStep(currentStep - 1);
  const nextStep = () => setCurrentStep(currentStep + 1);

  const setValues = (values: Partial<typeof formData>) => {
    setFormData((prevData) => ({
      ...prevData,
      ...values,
    }));
  };

  switch (currentStep) {
    case 1:
      return(
        <MotorbikeInfoForm
          nextStep={nextStep}
          setValues={setValues}
          values={formData}
          prevStep={prevStep}
        />
      ) 
    case 2:
      return (
        <PersonalInfoForm
          nextStep={nextStep}
          setValues={setValues}
          values={formData}
          prevStep={prevStep}
        />
      );
    default:
      return <div>Error: Invalid step</div>;
  }
}

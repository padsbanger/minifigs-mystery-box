import Heading from "@/components/ui/Heading/Heading";
import MinifigSummary from "./MinifigSummary";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { SHIPPING_FORM_SCHEMA } from "./ShippingStep.const";
import { ShippingFormValues } from "./ShippingStep.types";
import TextInput from "@/components/ui/TextInput/TextInput";
import {
  useMinifigsStore,
  useIsSubmittingOrder,
} from "@/lib/utils/services/MinifigsService/useMinifigsStore/useMinifigsStore";

const ShippingStep = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ShippingFormValues>({
    reValidateMode: "onChange",
    resolver: yupResolver(SHIPPING_FORM_SCHEMA),
  });
  const saveOrder = useMinifigsStore.getState().saveOrder;
  const isSubmittingOrder = useIsSubmittingOrder();
  const onSubmit: SubmitHandler<ShippingFormValues> = (data) => {
    saveOrder(data);
  };

  return (
    <div className="flex flex-col items-center md:h-screen h-auto justify-center">
      <div className="container mx-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col md:flex-row gap-10">
            <div className="basis-2/3">
              <Heading
                text="Shipping Details"
                variant={"heading3"}
                level={3}
                classes="my-4 text-white"
              />
              <div className="grid grid-cols-2 gap-4">
                <TextInput
                  label="First Name"
                  placeholder="Please provide your name"
                  {...register("firstName")}
                  errorMessage={errors.firstName?.message}
                  disabled={isSubmittingOrder}
                />
                <TextInput
                  label="Surname"
                  placeholder="Please provide your last name"
                  {...register("surName")}
                  errorMessage={errors.surName?.message}
                  disabled={isSubmittingOrder}
                />
              </div>
              <TextInput
                label="Phone number"
                placeholder="Please provide your phone number"
                {...register("phoneNumber")}
                errorMessage={errors.phoneNumber?.message}
                disabled={isSubmittingOrder}
              />
              <TextInput
                label="Email"
                placeholder="Please provide your email"
                {...register("email")}
                errorMessage={errors.email?.message}
                disabled={isSubmittingOrder}
              />
              <TextInput
                label="Date of birth"
                type="date"
                placeholder="Please provide your date of birth"
                {...register("dateOfBirth")}
                errorMessage={errors.dateOfBirth?.message}
                disabled={isSubmittingOrder}
              />
              <TextInput
                label="Address"
                {...register("address")}
                placeholder="Please provide your address"
                errorMessage={errors.address?.message}
                disabled={isSubmittingOrder}
              />
              <TextInput
                label="City"
                placeholder="Please provide your city"
                {...register("city")}
                errorMessage={errors.city?.message}
                disabled={isSubmittingOrder}
              />
              <div className="grid grid-cols-2 gap-4">
                <TextInput
                  label="State"
                  placeholder="Please provide your state"
                  {...register("state")}
                  errorMessage={errors.state?.message}
                  disabled={isSubmittingOrder}
                />
                <TextInput
                  placeholder="Please provide your zip code"
                  label="Zip Code"
                  type="number"
                  {...register("zip")}
                  errorMessage={errors.zip?.message}
                  disabled={isSubmittingOrder}
                />
              </div>
            </div>
            <MinifigSummary
              handleSubmit={() => handleSubmit(onSubmit)}
              isSubmitting={isSubmittingOrder}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ShippingStep;

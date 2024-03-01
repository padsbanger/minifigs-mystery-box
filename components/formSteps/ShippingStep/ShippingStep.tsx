import MinifigSummary from "./MinifigSummary";
import ShippingForm from "./ShippingForm";

const ShippingStep = () => {
  return (
    <div>
      <div className="container mx-auto">
        <div className="flex flex-row">
          <ShippingForm />
          <MinifigSummary />
        </div>
      </div>
    </div>
  );
};

export default ShippingStep;

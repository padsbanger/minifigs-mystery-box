import { useMinifigsStore } from "@/lib/utils/services/MinifigsService/useMinifigsStore/useMinifigsStore";

const WelcomeStep = () => {
  const getMinifigs = useMinifigsStore((state) => state.getMinifigs);
  return <div>lets go</div>;
};

export default WelcomeStep;

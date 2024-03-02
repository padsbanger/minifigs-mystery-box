import clsx from "clsx";
import Spinner from "../Spinner/Spinner";

const Button = ({
  label,
  onClick,
  classes,
  disabled,
  isLoading,
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      className={clsx(
        "bg-blue-500 hover:bg-blue-700 text-white font-bold py-6 px-12 rounded-md disabled:opacity-55 shadow-sm hover:shadow-xl transition-all active:shadow-2xl",
        classes,
      )}
      onClick={onClick}
    >
      {isLoading ? (
        <Spinner />
      ) : (
        <span className="uppercase font-plus-jakarta-sans">{label}</span>
      )}
    </button>
  );
};

export default Button;

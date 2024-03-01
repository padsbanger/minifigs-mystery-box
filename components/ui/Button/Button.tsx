import clsx from "clsx";

const Button = ({
  label,
  onClick,
  type = "button",
  classes,
  disabled,
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      type="button"
      className={clsx(
        "bg-blue-500 hover:bg-blue-700 text-white font-bold py-6 px-12 rounded-md disabled:opacity-85 shadow-sm hover:shadow-xl transition-all active:shadow-2xl",
        classes,
      )}
      onClick={onClick}
    >
      <span className="uppercase font-plus-jakarta-sans">{label}</span>
    </button>
  );
};

export default Button;

type Props = {
  children: string;
  onClick: ($event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  variant?: "default" | "primary" | "secondary";
  className?: string;
};

export default function Button(props: Props) {
  const { children, onClick, variant = "primary", className = "" } = props;

  const btnClassName = `px-4 py-2 rounded text-white ${
    variant === "primary"
      ? "bg-primary"
      : variant === "secondary"
      ? "bg-secondary"
      : "bg-gray-600"
  } ${className} border-red-600`;

  return (
    <button className={btnClassName} onClick={onClick}>
      {children}
    </button>
  );
}

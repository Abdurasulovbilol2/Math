import React from "react"

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline"
}

export const Button: React.FC<ButtonProps> = ({ variant = "default", className = "", ...props }) => {
  const base = "px-3 py-2 rounded transition";
  const styles =
    variant === "outline"
      ? "border border-gray-400 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800"
      : "bg-blue-600 text-white hover:bg-blue-700";
  return (
    <button className={`${base} ${styles} ${className}`} {...props} />
  );
};

export default Button;
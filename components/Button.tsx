import React from "react"

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: string
}

export const Button: React.FC<ButtonProps> = ({ variant, ...props }) => (
  <button
    {...props}
    className={`px-3 py-2 rounded ${variant === "ghost" ? "bg-transparent hover:bg-gray-200 dark:hover:bg-gray-700" : ""} ${props.className || ""}`}
  />
)
import { ComponentPropsWithoutRef } from "react"
import s from "./Button.module.css"
import clsx from "clsx"
import { Slot } from "@radix-ui/react-slot"

type Props = {
  asChild?: boolean
  variant?: "primary" | "secondary" | "outlined"
} & ComponentPropsWithoutRef<"button">

export const Button = ({ variant = "primary", asChild, className, ...rest }: Props) => {
  const Component = asChild ? Slot : "button"
  return <Component className={clsx(s.button, s[variant], className)} {...rest} />
}

/*export const Button = ({ variant = "primary", className, ...rest }: Props) => {
  return (
    <button
      className={`${s.button}
  ${variant === "primary" ? s.primary : ""}
  ${variant === "secondary" ? s.secondary : ""}
  ${variant === "outlined" ? s.outlined : ""}
  ${className}
     `}
      {...rest}
    />
  )
}*/

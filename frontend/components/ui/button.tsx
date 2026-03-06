import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors outline-none disabled:pointer-events-none disabled:opacity-50 focus-visible:ring-2 focus-visible:ring-blue-500 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-blue-600 text-white hover:bg-blue-700",

        destructive:
          "bg-red-600 text-white hover:bg-red-700",

        outline:
          "border border-slate-300 bg-white text-slate-900 hover:bg-slate-100",

        secondary:
          "bg-slate-100 text-slate-900 hover:bg-slate-200",

        ghost:
          "text-slate-900 hover:bg-slate-100",

        link:
          "text-blue-600 underline-offset-4 hover:underline",
      },

      size: {
        default: "h-10 px-4",
        xs: "h-6 px-2 text-xs",
        sm: "h-8 px-3",
        lg: "h-11 px-6",
        icon: "size-9",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {

  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  )
}

export { Button, buttonVariants }
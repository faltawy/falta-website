import { cn } from "@ui/utils";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

export const Logo = forwardRef<ElementRef<"svg">, ComponentPropsWithoutRef<"svg">>(
  ({ className, ...props }, _ref) => (
    <svg
      className={cn("w-9 h-9 aspect-square", className)}
      viewBox="0 0 48 48"
      fill="none"
      ref={_ref}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="27.1304"
        y="27.1305"
        width="20.8696"
        height="20.8696"
        fill="white"
      />
      <rect y="27.1305" width="20.8696" height="20.8696" fill="white" />
      <rect width="20.8696" height="20.8696" fill="white" />
    </svg>
  )
);
Logo.displayName = "Logo";

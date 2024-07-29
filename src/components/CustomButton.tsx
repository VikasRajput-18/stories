import React from "react";
import { Button, ButtonProps } from "./ui/button";
import { cn } from "@/lib/utils";

type CustomButtonProps = ButtonProps & {
  className?: string;
  heading: string;
};

const CustomButton: React.FC<CustomButtonProps> = ({
  className,
  heading,
  ...buttonProps
}) => {
  return (
    <Button
      className={cn(
        "bg-pink-500 text-white hover:bg-pink-600 rounded-3xl border-b-4 border-b-pink-400 active:border-b-2",
        className
      )}
      {...buttonProps}
    >
      {heading}
    </Button>
  );
};

export default CustomButton;

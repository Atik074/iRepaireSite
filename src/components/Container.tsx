import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type TContainerProps = {
  children: ReactNode;
  className?: string;
};

const Container = ({ children, className }: TContainerProps) => {
  return (
    <div className={cn("w-full  max-w-[1230px] mx-auto px-[20px]", className)}>
      {children}
    </div>
  );
};

export default Container;

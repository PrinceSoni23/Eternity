import React from "react";
import { cn } from "@/functions";

interface Props {
    className?: string;
    children: React.ReactNode;
}

const Wrapper = ({ children, className }: Props) => {
    return (
        <div
            className={cn(
                "h-full mx-auto w-full max-w-full md:max-w-screen-3xl",
                className
            )}
        >
            {children}
        </div>
    )
};

export default Wrapper

import { ComponentProps } from "react";
import { cn } from "../../utils/cn";

type Props = {
	children: string;
} & ComponentProps<"p">;

export const Text = ({ children, className }: Props) => {
	return <p className={cn("text-blue-300 font-600", className)}>{children}</p>;
};

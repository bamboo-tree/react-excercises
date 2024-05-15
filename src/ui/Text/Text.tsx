import { ComponentProps } from "react";
import { cn } from "../../utils/cn";

type Props = {
	children: string;
} & ComponentProps<"h1">;

export const Text = ({ children, className }: Props) => {
	return (
		<h1 className={cn("text-blue-300 font-600", className)}>{children}</h1>
	);
};

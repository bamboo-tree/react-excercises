import { ComponentProps } from "react";
import { cn } from "../../utils/cn";

type Props = {
	children: string;
} & ComponentProps<"p">;

export const Paragraph = ({ children, className }: Props) => {
	return <p className={cn("italic text-stone-300", className)}>{children}</p>;
};

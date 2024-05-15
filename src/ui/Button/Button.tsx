import { ComponentProps, MouseEventHandler } from "react";
import { cn } from "../../utils/cn";

type Props = {
	label: string;
	onClick: MouseEventHandler<HTMLButtonElement>;
} & ComponentProps<"button">;

export const Button = ({ label, onClick, className, ...rest }: Props) => {
	return (
		<button
			className={cn(
				"px-4 py-2 border-green-900 border-4 bg-green-700 rounded-xl",
				className
			)}
			onClick={onClick}
			{...rest}
		>
			{label}
		</button>
	);
};

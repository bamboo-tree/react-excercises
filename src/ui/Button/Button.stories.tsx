import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button } from "./Button";

const meta = {
	title: "UI/Button",
	component: Button,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {},
	args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		label: "Green",
		className:
			"bg-green-500 border-black border-4 rounded-md hover:bg-green-600",
	},
};

export const Blue: Story = {
	args: {
		label: "Blue",
		className: "bg-blue-500 border-black border-4 rounded-md hover:bg-blue-600",
	},
};

export const Red: Story = {
	args: {
		label: "Red",
		className: "bg-red-500 border-black border-4 rounded-md hover:bg-red-600",
	},
};

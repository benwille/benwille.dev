import React from "react";

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
	children: React.ReactNode;
};
export default function Card({ children, className = '', ...rest }: CardProps) {
	return (
		<div
			className={`group rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md ${className}`}
			{...rest}
		>
			{children}
		</div>
	);
}
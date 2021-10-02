import { ReactNode } from "react";

export interface LinkProps {
	external?: boolean;
	to?: string;
	children: ReactNode;
}

export function Link(props: LinkProps) {
	if (!props.to) return <>{props.children}</>;
	if (props.external)
		return (
			<a target="_BLANK" rel="noreferrer" href={props.to}>
				{props.children}
			</a>
		);

	return <a href={props.to as string}>{props.children}</a>;
}

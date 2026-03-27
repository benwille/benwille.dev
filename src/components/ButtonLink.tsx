// src/components/ButtonLink.tsx
type Props = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
	variant?: 'primary' | 'secondary';
};
export default function ButtonLink({
	variant = 'primary',
	className = '',
	...props
}: Props) {
	const base =
		'btn inline-flex items-center rounded-xl px-4 py-2 text-sm font-medium';
	const styles =
		variant === 'primary'
			? 'bg-emerald-600 text-white hover:bg-emerald-700 hover:text-white'
			: 'border border-zinc-300 bg-white text-zinc-900 hover:bg-zinc-50 hover:text-zinc-900';
	return <a {...props} className={`${base} ${styles} ${className}`} />;
}

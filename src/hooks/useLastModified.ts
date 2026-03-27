// src/hooks/useLastModified.ts
import { useEffect, useState } from 'react';

export function useLastModified(url: string | undefined) {
	const [date, setDate] = useState<Date | null>(null);

	useEffect(() => {
		let cancelled = false;
		if (!url) return;

		(async () => {
			try {
				const res = await fetch(url, { method: 'HEAD' });
				const lm = res.headers.get('Last-Modified');
				if (lm && !cancelled) setDate(new Date(lm));
			} catch {
				/* ignore; we'll fall back */
			}
		})();

		return () => {
			cancelled = true;
		};
	}, [url]);

	return date;
}

// src/utils/format.ts
export function formatMonthYear(d: Date) {
	return d.toLocaleString('en-US', { month: 'short', year: 'numeric' }); // e.g., "Aug 2025"
}

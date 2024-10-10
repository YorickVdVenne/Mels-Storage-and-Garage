export function hasValue<T>(v: T | undefined | null): v is T {
  return v !== null && v !== undefined && v !== '';
}

export const getColorClass = (color: string): string => {
  const colorMap: { [key: string]: string } = {
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    teal: 'bg-teal',
    coral: 'bg-coral',
    lavender: 'bg-lavender',
    'muted-gold': 'bg-muted-gold',
  };

  return colorMap[color] || 'bg-primary'; // Fallback to a default color if not found
};

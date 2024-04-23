export function formatToUserDate(date: string | Date) {
  if (typeof date === "string") return new Date(date).toLocaleDateString();

  return date.toLocaleDateString();
}

export function formatDateTime(date: string) {
  const dateToFormat = new Date(date);
  const formater = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return formater.format(dateToFormat);
}

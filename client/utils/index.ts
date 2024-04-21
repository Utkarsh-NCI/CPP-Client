export const formatDate = (date: string) => {
  return new Date(date).toLocaleTimeString("en-gb", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

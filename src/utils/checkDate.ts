const isDateInPast = (userDate: string): boolean => {
  const [day, month, year] = userDate.split("/").map(Number);
  const parsedDate = new Date(year, month - 1, day); // month is 0-indexed
  const now = new Date();
  return parsedDate < now;
};

export default isDateInPast;

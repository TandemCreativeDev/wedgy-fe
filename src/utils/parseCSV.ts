import { TourDateType } from "../utils/types/types";

const parseCSV = (csv: string) => {
  // Parse CSV text
  const rows = csv.split("\n"); // Split by new lines to get each row
  const headers = rows[0].split(","); // Get headers from the first row

  const parsedData = rows.slice(1).map((row) => {
    const values = row.split(",");
    const tourDate: TourDateType = headers.reduce((object, header, index) => {
      const key = header.trim() as keyof TourDateType; // Use keyof for type-safe property access
      object[key] = values[index]?.trim() || "";
      return object;
    }, {} as TourDateType); // Specify the initial object type
    return tourDate;
  });
  return parsedData;
};

export default parseCSV;

import { useEffect, useState } from "react";

export default function Tour() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://docs.google.com/spreadsheets/d/e/2PACX-1vQY-sZZXmGZQdBX1httEyxhEFNzznVqnGK_bNDPWbi4HZu0eickSRQDLhy0WdX6pgVYmUIAdAOczZBR/pub?output=csv"
        );
        const csvText = await response.text();

        // Parse CSV text
        const rows = csvText.split("\n"); // Split by new lines to get each row
        const headers = rows[0].split(","); // Get headers from the first row

        const parsedData = rows.slice(1).map((row) => {
          const values = row.split(",");
          return headers.reduce((object, header, index) => {
            object[header.trim()] = values[index]?.trim();
            return object;
          }, {});
        });
        console.log(parsedData);
        setData(parsedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h2 className=" font-lexend text-white text-5xl md:text-7xl text-center tracking-widest">
        TOUR
      </h2>
    </>
  );
}

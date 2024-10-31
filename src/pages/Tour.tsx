import { useEffect, useState } from "react";
import parseCSV from "../utils/parseCSV";

// Define a type for your data structure
export type TourDateType = {
  venue: string;
  location: string;
  event_date: string;
  ticket_link: string;
};

export default function Tour() {
  const [data, setData] = useState<TourDateType[]>([]); // Use the type here

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://docs.google.com/spreadsheets/d/e/2PACX-1vQY-sZZXmGZQdBX1httEyxhEFNzznVqnGK_bNDPWbi4HZu0eickSRQDLhy0WdX6pgVYmUIAdAOczZBR/pub?output=csv"
        );
        const csvText = await response.text();

        const parsedData = parseCSV(csvText);

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
      <ul className="mt-10">
        {data.map((tourDate) => (
          <div
            key={tourDate.venue + tourDate.event_date} // Add a unique key
            className="mb-14 m-auto w-1/2 flex flex-col justify-center items-center text-center"
          >
            <li>{tourDate.venue}</li>
            <li>{tourDate.location}</li>
            <li>{tourDate.event_date}</li>
            <li className="mt-6">
              <a
                className="bg-white text-black text-center p-2 "
                target="_blank"
                href={tourDate.ticket_link}
              >
                Buy Tickets
              </a>
            </li>
          </div>
        ))}
      </ul>
    </>
  );
}

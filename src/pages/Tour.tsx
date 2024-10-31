import { useEffect, useState } from "react";
import parseCSV from "../utils/parseCSV";
import isDateInPast from "../utils/checkDate";
import dateInPast from "../utils/checkDate";
import TourDatesContainer from "../components/TourDates/TourDatesContainer";

// Define a type for your data structure
export type TourDateType = {
  venue: string;
  location: string;
  event_date: string;
  ticket_link: string;
};

export default function Tour() {
  const [data, setData] = useState<TourDateType[]>([]); // Use the type here
  const [futureDates, setFutureDates] = useState([]);
  const [pastDates, setPastDates] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://docs.google.com/spreadsheets/d/e/2PACX-1vQY-sZZXmGZQdBX1httEyxhEFNzznVqnGK_bNDPWbi4HZu0eickSRQDLhy0WdX6pgVYmUIAdAOczZBR/pub?output=csv"
        );
        const csvText = await response.text();

        const parsedData = parseCSV(csvText);

        // console.log(parsedData);
        setData(parsedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const past: TourDateType[] = [];
    const future: TourDateType[] = [];

    data.forEach((date) => {
      dateInPast(date.event_date) ? past.push(date) : future.push(date);
    });

    setPastDates(past);
    setFutureDates(future);

    console.log("Past Dates:", past);
    console.log("Future Dates:", future);
  }, [data]);

  return (
    <>
      <h2 className=" font-lexend text-white text-5xl md:text-7xl text-center tracking-widest">
        TOUR
      </h2>
      <div className=" m-auto w-11/12 mt-10">
        <TourDatesContainer tourDates={futureDates} title={"Upcoming Events"} />
        <TourDatesContainer tourDates={pastDates} title={"Past Events"} />
      </div>
    </>
  );
}

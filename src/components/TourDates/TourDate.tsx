import { TourDateType } from "../../utils/types/types";

interface TourDateProps {
  tourDate: TourDateType;
  pastOrFuture: string;
}

export default function TourDate({ tourDate, pastOrFuture }: TourDateProps) {
  return (
    <div
      key={tourDate.venue + tourDate.event_date}
      className="mb-14 m-auto flex flex-col justify-center items-center text-center min-w-64"
    >
      <ul>
        <li>{tourDate.venue}</li>
        <li>{tourDate.location}</li>
        <li>{tourDate.event_date}</li>
        <li className="mt-7">
          {pastOrFuture === "upcoming events" ? (
            <a
              className="bg-white text-black text-center p-3 hover:bg-gray-300"
              target="_blank"
              rel="noopener noreferrer"
              href={tourDate.ticket_link}
            >
              Buy Tickets
            </a>
          ) : (
            <span className="bg-gray-800 text-gray-400 text-center p-3">
              Unavailable
            </span>
          )}
        </li>
      </ul>
    </div>
  );
}

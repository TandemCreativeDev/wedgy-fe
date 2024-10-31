import { TourDateType } from "../../pages/Tour";

interface TourDateProps {
  tourDate: TourDateType;
}

export default function TourDate({ tourDate }: TourDateProps) {
  return (
    <div
      key={tourDate.venue + tourDate.event_date}
      className="mb-14 m-auto flex flex-col justify-center items-center text-center min-w-64"
    >
      <ul>
        <li>{tourDate.venue}</li>
        <li>{tourDate.location}</li>
        <li>{tourDate.event_date}</li>
        <li className="mt-6">
          <a
            className="bg-white text-black text-center p-2 hover:bg-gray-300 "
            target="_blank"
            href={tourDate.ticket_link}
          >
            Buy Tickets
          </a>
        </li>
      </ul>
    </div>
  );
}

import TourDate from "./TourDate";

import { TourDateType } from "../../pages/Tour";

interface TourDatesContainerProps {
  tourDates: TourDateType[];
  title: string;
}

export default function TourDatesContainer({
  tourDates,
  title,
}: TourDatesContainerProps) {
  return (
    <>
      <div className="mb-24">
        <h3 className="text-3xl text-center pb-10">{title}</h3>
        <div className="flex flex-wrap">
          {tourDates.map((tourDate) => {
            return <TourDate tourDate={tourDate} pastOrFuture={title} />;
          })}
        </div>
      </div>
    </>
  );
}

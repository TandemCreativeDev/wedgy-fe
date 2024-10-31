import TourDate from "./TourDate";

export default function TourDatesContainer({ tourDates, title }) {
  return (
    <>
      <div className="mb-24">
        <h3 className="text-3xl text-center pb-10">{title}</h3>
        <div className="flex">
          {tourDates.map((tourDate) => {
            return <TourDate tourDate={tourDate} />;
          })}
        </div>
      </div>
    </>
  );
}

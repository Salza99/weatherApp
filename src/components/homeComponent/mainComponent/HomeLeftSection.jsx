import SingleDayWeatherCard from "../singleComponent/SingleDayWeatherCard";

const HomeLeftSection = ({ fiveDaysResult }) => {
  return (
    <div className="left-section">
      {fiveDaysResult.data.length > 0 &&
        fiveDaysResult.data.map((data, index) => {
          return <SingleDayWeatherCard key={index} data={data} />;
        })}
    </div>
  );
};
export default HomeLeftSection;

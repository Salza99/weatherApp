import { useSelector } from "react-redux";
import SingleHourWeatherCard from "../singleComponent/SingleHourWeatherCard";

const HomeRightSection = () => {
  const selectedDay = useSelector((state) => state.meteo.selectedDay);
  return <>{selectedDay && <SingleHourWeatherCard selectedDay={selectedDay} />}</>;
};
export default HomeRightSection;

import { CityItem } from "./CityItem";
import styles from "./CityList.module.css";
import Message from "./Message";
import Spinner from "./Spinner";

export function CityList({ cities, isLoading }) {
  if (isLoading) return <Spinner></Spinner>;
  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map"></Message>
    );
  return (
    <ul className={styles.cityList}>
      {cities.map((c) => (
        <CityItem city={c} key={c.id}></CityItem>
      ))}
    </ul>
  );
}

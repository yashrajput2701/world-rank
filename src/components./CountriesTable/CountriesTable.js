import {
  KeyboardArrowDownRounded,
  KeyboardArrowUpRounded,
} from "@material-ui/icons";
import { useState } from "react";
import styles from "./CountriesTable.module.css";
import Link from "next/link";

const orderBy = (countries, value, direction) => {
  if (direction === "asc") {
    return [...countries].sort((a, b) => (a[value] > b[value] ? 1 : -1));
  }

  if (direction === "desc") {
    return [...countries].sort((a, b) => (a[value] > b[value] ? -1 : 1));
  }

  return countries;
};

const SortArrow = ({ direction }) => {
  if (!direction) {
    return <></>;
  }
  if (direction === "desc") {
    return (
      <div className={styles.heading_arrow}>
        <KeyboardArrowDownRounded color="inherit" />
      </div>
    );
  } else {
    return (
      <div className={styles.heading_arrow}>
        <KeyboardArrowUpRounded color="inherit" />
      </div>
    );
  }
};

const CountriesTable = ({ countries }) => {
  const [direction, setDirection] = useState();
  const [value, setValue] = useState();

  const orderedcountries = orderBy(countries, value, direction);

  const switchDirection = () => {
    if (!direction) {
      setDirection("desc");
    } else if (direction === "desc") {
      setDirection("asc");
    } else {
      setDirection(null);
    }
  };

  const setValueAndDirection = (value) => {
    switchDirection();
    setValue(value);
  };

  return (
    <div>
      <div className={styles.heading}>
        <button
          className={styles.heading_name}
          onClick={() => setValueAndDirection("name")}
        >
          <div>Name</div>
          {value === "name" && <SortArrow direction={direction} />}
        </button>

        <button
          className={styles.heading_population}
          onClick={() => setValueAndDirection("callingCodes")}
        >
          <div>Calling Codes</div>
          <SortArrow direction={direction} />
        </button>

        <button
          className={styles.heading_area}
          onClick={() => setValueAndDirection("capital")}
        >
          <div>Capital</div>
          {value === "capital" && <SortArrow direction={direction} />}
          
        </button>

        <button
          className={styles.heading_gini}
          onClick={() => setValueAndDirection("region")}
        >
          <div>Region</div>
          {value === "region" && <SortArrow direction={direction} />}
        </button>
      </div>

      {orderedcountries.map((country, index) => (
        <Link href={`/country/${country.alpha3Code}`} key={country.name}>
          <div className={styles.row} key={index}>
            <div className={styles.name}>{country.name}</div>

            <div className={styles.population}>{country.callingCodes}</div>


            <div className={styles.area}>{country.capital}</div>

            <div className={styles.gini}>{country.region}</div>
          </div>
          
        </Link>
      ))}
    </div>
  );
};

export default CountriesTable;

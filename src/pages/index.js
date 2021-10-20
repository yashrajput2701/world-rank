import Head from "next/head";
import Image from "next/image";
import Layout from "../components./Layout/Layout";
import styles from "../styles/Home.module.css";
import SearchInput from "../components./SearchInput/SearchInput";
import CountriesTable from "../components./CountriesTable/CountriesTable";
import { useState } from "react";

export default function Home({ countries }) {
  console.log(countries);

  const [keyword, setKeyword] = useState("");

  const filteredCountries = countries.filter(
    (country) =>
      country.name.toLowerCase().includes(keyword) ||
      country.region.toLowerCase().includes(keyword)
  );

  const onInputChange = (e) => {
    e.preventDefault();

    setKeyword(e.target.value.toLowerCase());
  };

  return (
    <Layout>
      <div className={styles.counts}>Found {countries.length} countries</div>

      <SearchInput
        placeholder="Filter by Name, Region or Sub-Region"
        onChange={onInputChange}
      />

      <CountriesTable countries={filteredCountries} />
    </Layout>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    "http://api.countrylayer.com/v2/all?access_key=d6232217e02ff880deeab8ac7c8a5333"
  );
  const countries = await res.json();

  return {
    props: {
      countries,
    },
  };
};

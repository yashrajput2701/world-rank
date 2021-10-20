import Layout from "../../components./Layout/Layout";
import styles from "./country.module.css";
// import flag from "../../../public/flag.jpg";
import Image from "next/image";
const Country = ({ country }) => {
  return (
    // <div>country</div>
    <Layout title={country.name}>
      <div className={styles.container}>
          <div className={styles.container_left}>
          <div className={styles.overview_panel}>
          {/* <img src={country.flag} alt={country.name}></img> */}
          <Image className={styles.image} src="/flag.jpg" width='1840' height="600"  />

          <h1 className={styles.overview_name}>{country.name}</h1>
          <div className={styles.overview_region}>{country.region}</div>

          <div className={styles.overview_numbers}>
            <div className={styles.overview_population}>
              <div className={styles.overview_value}>
                {country.altSpellings}
              </div>
              <div className={styles.overview_label}>alt Spellings</div>
            </div>

            <div className={styles.overview_area}>
              <div className={styles.overview_value}>{country.capital}</div>
              <div className={styles.overview_label}>Capital</div>
            </div>
          </div>
        </div>
          </div>
          <div className={styles.container_right}>
          <div className={styles.details_panel}>
            <h4 className={styles.details_panel_heading}>Details</h4>

            <div className={styles.details_panel_row}>
                <div className={styles.details_panel_label}>Capital</div>
                <div className={styles.details_panel_value}>
                    {country.capital}
                </div>
            </div>

            <div className={styles.details_panel_row}>
                <div className={styles.details_panel_label}>Region</div>
                <div className={styles.details_panel_value}>
                    {country.region}
                </div>
            </div>
            <div className={styles.details_panel_row}>
                <div className={styles.details_panel_label}>alpha 2 code</div>
                <div className={styles.details_panel_value}>
                    {country.alpha2Code}
                </div>
            </div>
            <div className={styles.details_panel_row}>
                <div className={styles.details_panel_label}>alpha 3 code</div>
                <div className={styles.details_panel_value}>
                    {country.alpha3Code}
                </div>
            </div>
            <div className={styles.details_panel_row}>
                <div className={styles.details_panel_label}>Domain</div>
                <div className={styles.details_panel_value}>
                    {country.topLevelDomain}
                </div>
            </div>
        </div>
          </div>
       

        
      </div>
    </Layout>
  );
};

export default Country;

export const getServerSideProps = async ({ params }) => {
  const res = await fetch(
    `http://api.countrylayer.com/v2/alpha/${params.id}?access_key=d6232217e02ff880deeab8ac7c8a5333`
  );

  const country = await res.json();

  return {
    props: {
      country,
    },
  };
};

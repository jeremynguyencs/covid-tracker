import React from "react";

import { Cards, Chart, CountryPicker, Navbar, Footer } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";

class App extends React.Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  };

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <Navbar />

        <div className={styles.panel}>
          <div className={styles.cards}>
            <Cards data={data} />
          </div>
        </div>

        <div className={styles.graphCard}>
          <div className={styles.title}>
            <h1> Graph </h1>
          </div>
          <div className={styles.countryPicker}>
            <CountryPicker handleCountryChange={this.handleCountryChange} />{" "}
          </div>
          <div className={styles.graph}>
            <Chart data={data} country={country} />
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
import React, { Component } from 'react';
import Cards from './components/Cards';
import Chart from './components/Chart';
import CountryPicker from './components/CountryPicker';
import styles from './App.module.css';
import { fetchData } from './api';
import coronaImage from './images/image.png';

class App extends Component {
  state = {
    data: {},
    country: '',
  };

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    const data = await fetchData();

    this.setState({ data });
  };

  handleCountryChange = async country => {
    // fetch data
    const fetchedData = await fetchData(country);

    // set the state
    this.setState({ data: fetchedData, country });
  };

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <img src={coronaImage} className={styles.image} alt="COVID-19" />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
